/* 커버리지 뷰어 — 2D / 2.5D / 3D
 *
 * 세 모드를 따로 만들지 않는다. **투영기 하나에 프리셋 셋**을 둔다.
 *   2D    수직 내려보기(pitch 90°) · 정사영 · 층 하나만
 *   2.5D  아이소메트릭(yaw 45° / pitch 30°) · 정사영 · 층을 쌓아 본다
 *   3D    자유 회전 · 원근 · 드래그로 궤도, 휠로 줌
 *
 * 외부 라이브러리를 쓰지 않는다. 캔버스에 직접 그린다 — 복셀이 2천 개를 넘어
 * SVG 노드로 두면 회전할 때 버벅인다.
 *
 * 깊이 정렬은 화가 알고리즘이다. 면이 축정렬 사각형뿐이라 이걸로 충분하다.
 */
(function (global) {
  'use strict';

  const DEG = Math.PI / 180;

  const PRESETS = {
    // zx = 수직 과장. 층간 4m 는 100×60m 현장에 견주면 너무 얇아 층이 뭉쳐
    // 보인다. 3D 로 만든 이유가 층 구분이므로 눌러 보이지 않게 늘린다.
    '2d':   { yaw: 0,  pitch: 90, persp: false, orbit: false, single: true,  zx: 1 },
    '2.5d': { yaw: 45, pitch: 30, persp: false, orbit: false, single: false, zx: 3.2 },
    '3d':   { yaw: 35, pitch: 25, persp: true,  orbit: true,  single: false, zx: 2.4 },
  };

  function heat(p) {
    const t = p <= .5 ? p / .5 : (p - .5) / .5;
    const a = p <= .5 ? [166, 42, 42] : [196, 145, 40];
    const b = p <= .5 ? [196, 145, 40] : [30, 122, 70];
    return a.map((v, i) => Math.round(v + (b[i] - v) * t));
  }

  function rgba(c, alpha) {
    return `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
  }

  class Viewer {
    constructor(canvas, data, opts) {
      this.cv = canvas;
      this.ctx = canvas.getContext('2d');
      this.d = data;
      this.opts = Object.assign({ mode: '2.5d', level: 0, key: 'P_total_empirical',
                                  showCams: true, showSolids: true }, opts || {});
      this.cam = Object.assign({}, PRESETS[this.opts.mode]);
      this.zoom = 1;
      this._bindOrbit();
      this.resize();
    }

    setMode(mode) {
      this.opts.mode = mode;
      this.cam = Object.assign({}, PRESETS[mode]);
      this.zoom = 1;
      this.draw();
    }

    set(k, v) { this.opts[k] = v; this.draw(); }

    resize() {
      const r = this.cv.getBoundingClientRect();
      const dpr = global.devicePixelRatio || 1;
      this.cv.width = Math.max(1, Math.round(r.width * dpr));
      this.cv.height = Math.max(1, Math.round(r.height * dpr));
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.W = r.width; this.H = r.height;
      this.draw();
    }

    _bindOrbit() {
      let drag = null;
      this.cv.addEventListener('pointerdown', e => {
        if (!this.cam.orbit) return;
        drag = { x: e.clientX, y: e.clientY, yaw: this.cam.yaw, pitch: this.cam.pitch };
        this.cv.setPointerCapture(e.pointerId);
      });
      this.cv.addEventListener('pointermove', e => {
        if (!drag) return;
        this.cam.yaw = drag.yaw + (e.clientX - drag.x) * 0.4;
        this.cam.pitch = Math.max(5, Math.min(89, drag.pitch + (e.clientY - drag.y) * 0.3));
        this.draw();
      });
      const stop = () => { drag = null; };
      this.cv.addEventListener('pointerup', stop);
      this.cv.addEventListener('pointercancel', stop);
      this.cv.addEventListener('wheel', e => {
        if (!this.cam.orbit) return;
        e.preventDefault();
        this.zoom = Math.max(0.4, Math.min(3, this.zoom * (e.deltaY < 0 ? 1.1 : 0.9)));
        this.draw();
      }, { passive: false });
    }

    /* 세계좌표 → 투영 평면. 화면 크기는 여기서 모른다. */
    _raw(x, y, z) {
      const S = this.d.site;
      const cx = S.width_m / 2, cy = S.depth_m / 2;
      const yaw = this.cam.yaw * DEG, pit = this.cam.pitch * DEG;
      const dx = x - cx, dy = y - cy, dz = z * (this.cam.zx || 1);

      const rx = dx * Math.cos(yaw) - dy * Math.sin(yaw);
      const ry = dx * Math.sin(yaw) + dy * Math.cos(yaw);

      const sy = ry * Math.sin(pit) - dz * Math.cos(pit);
      const depth = ry * Math.cos(pit) + dz * Math.sin(pit);   // 정렬용

      let sx = rx, sy2 = sy;
      if (this.cam.persp) {
        const dist = Math.max(S.width_m, S.depth_m) * 1.6;
        const k = dist / (dist + depth);
        sx *= k; sy2 *= k;
      }
      return { x: sx, y: sy2, depth };
    }

    /* 투영 평면 → 화면. _fit 은 draw() 가 매번 다시 잰다.
     * 수직 과장·회전·원근이 섞이면 결과 크기를 미리 알 수 없어, 고정 배율로
     * 두면 캔버스 밖으로 넘친다. 그래서 실제 투영 결과에 맞춘다. */
    _project(x, y, z) {
      const r = this._raw(x, y, z);
      const f = this._fit;
      return { x: f.ox + r.x * f.s, y: f.oy + r.y * f.s, depth: r.depth };
    }

    /* 그릴 것 전체의 투영 경계를 재서 배율과 중심을 정한다. */
    _measure() {
      const S = this.d.site, d = this.d;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      const put = (p) => {
        if (p.x < x0) x0 = p.x; if (p.x > x1) x1 = p.x;
        if (p.y < y0) y0 = p.y; if (p.y > y1) y1 = p.y;
      };
      const single = this.cam.single;
      d.voxels.forEach(v => {
        if (single && v.level !== this.opts.level) return;
        put(this._raw(v.x, v.y, v.z));
      });
      if (this.opts.showSolids && d.solids && !single) {
        d.solids.forEach(b => {
          [[b.x1,b.y1,b.z1],[b.x2,b.y2,b.z2],[b.x1,b.y2,b.z2],[b.x2,b.y1,b.z1]]
            .forEach(c => put(this._raw(c[0], c[1], c[2])));
        });
      }
      if (!isFinite(x0)) { x0 = -S.width_m/2; x1 = S.width_m/2;
                           y0 = -S.depth_m/2; y1 = S.depth_m/2; }
      const pad = 26;
      const s = Math.min((this.W - pad*2) / Math.max(1e-6, x1 - x0),
                         (this.H - pad*2) / Math.max(1e-6, y1 - y0)) * this.zoom;
      this._fit = { s, ox: this.W/2 - (x0 + x1)/2 * s, oy: this.H/2 - (y0 + y1)/2 * s };
    }

    _quad(x, y, z, s) {
      const h = s / 2;
      return [[x - h, y - h, z], [x + h, y - h, z],
              [x + h, y + h, z], [x - h, y + h, z]]
        .map(p => this._project(p[0], p[1], p[2]));
    }

    _boxFaces(b) {
      const c = [[b.x1, b.y1, b.z1], [b.x2, b.y1, b.z1], [b.x2, b.y2, b.z1], [b.x1, b.y2, b.z1],
                 [b.x1, b.y1, b.z2], [b.x2, b.y1, b.z2], [b.x2, b.y2, b.z2], [b.x1, b.y2, b.z2]];
      const idx = [[0,1,2,3],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]];
      return idx.map(f => f.map(i => this._project(c[i][0], c[i][1], c[i][2])));
    }

    draw() {
      const ctx = this.ctx, d = this.d;
      ctx.clearRect(0, 0, this.W, this.H);
      this._measure();
      const items = [];

      // ── 골조 ──
      if (this.opts.showSolids && d.solids) {
        const tone = { core: [150,157,166], slab: [176,183,191],
                       scaffold: [140,160,175], stack: [163,150,130] };
        // 면을 채우면 위층 복셀 색을 덮는다. 골조는 **윤곽 위주**로 그린다.
        const solid2d = this.cam.pitch >= 89;
        d.solids.forEach(b => {
          const c = tone[b.kind] || [160,160,160];
          const faint = b.kind === 'slab' || b.kind === 'scaffold';
          this._boxFaces(b).forEach(f => {
            const dep = f.reduce((a, p) => a + p.depth, 0) / f.length;
            items.push({
              depth: dep - 0.01, pts: f,
              fill: rgba(c, solid2d ? 0.18 : (faint ? 0.03 : 0.10)),
              stroke: rgba(c, faint ? 0.30 : 0.55), lw: 0.7,
            });
          });
        });
      }

      // ── 복셀 ──
      const key = this.opts.key;
      const single = this.cam.single;
      d.voxels.forEach(v => {
        if (single && v.level !== this.opts.level) return;
        const p = v[key];
        if (p === undefined || p === null) return;
        const pts = this._quad(v.x, v.y, v.z, d.site.voxel_m);
        const dep = pts.reduce((a, q) => a + q.depth, 0) / pts.length;
        items.push({ depth: dep, pts,
                     fill: rgba(heat(p), 0.34 + 0.56 * (1 - p)), stroke: null });
      });

      // 화가 알고리즘 — 먼 것부터
      items.sort((a, b) => b.depth - a.depth);
      items.forEach(it => {
        ctx.beginPath();
        it.pts.forEach((q, i) => i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y));
        ctx.closePath();
        ctx.fillStyle = it.fill; ctx.fill();
        if (it.stroke) { ctx.strokeStyle = it.stroke; ctx.lineWidth = it.lw || 1; ctx.stroke(); }
      });

      // ── 카메라 (항상 맨 위) ──
      if (this.opts.showCams && d.cameras) {
        const chosen = new Set(this.opts.cameraIds || []);
        d.cameras.forEach(c => {
          const on = chosen.size === 0 || chosen.has(c.id);
          const p = this._project(c.x, c.y, c.z);
          if (on) {
            const ang = (c.yaw_deg || 0) * DEG;
            const half = (d.aim ? d.aim.hfov_deg : 90) * DEG / 2, R = 16;
            const g = this._project(c.x, c.y, 0);
            ctx.beginPath(); ctx.moveTo(g.x, g.y);
            for (let t = -half; t <= half + 1e-6; t += half / 8) {
              const q = this._project(c.x + R * Math.cos(ang + t),
                                      c.y + R * Math.sin(ang + t), 0);
              ctx.lineTo(q.x, q.y);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(11,79,138,.13)'; ctx.fill();
            ctx.strokeStyle = 'rgba(11,79,138,.42)'; ctx.lineWidth = 1; ctx.stroke();
            // 설치 높이를 기둥으로 — 3D 에서 카메라가 떠 있는 게 보여야 한다
            ctx.beginPath(); ctx.moveTo(g.x, g.y); ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = 'rgba(11,79,138,.45)'; ctx.stroke();
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, on ? 5 : 3, 0, Math.PI * 2);
          ctx.fillStyle = on ? '#0b4f8a' : '#b4bcc5';
          ctx.fill();
          ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
        });
      }
    }
  }

  global.CoverageViewer = { Viewer, PRESETS, heat };
})(window);
