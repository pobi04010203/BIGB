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
    // zx = 수직 과장.
    // **부피 복셀(큐브)에서는 1에 가깝게 둔다.** 큐브가 이미 실제 높이를 차지하고
    // 있어서 늘리면 14m 현장이 45m 로 보인다. 층별 판(work_plane)일 때만 층이
    // 뭉쳐 보여 과장이 필요했다. 데이터가 어느 쪽인지 보고 정한다.
    '2d':   { yaw: 0,  pitch: 90, persp: false, orbit: false, single: true,  zx: 1 },
    '2.5d': { yaw: 45, pitch: 30, persp: false, orbit: false, single: false, zx: 1.15 },
    '3d':   { yaw: 35, pitch: 25, persp: true,  orbit: true,  single: false, zx: 1.0 },
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
      if (this._isPlanar()) this.cam.zx *= 2.8;
      this.zoom = 1;
      this._bindOrbit();
      this.resize();
    }

    setMode(mode) {
      this.opts.mode = mode;
      this.cam = Object.assign({}, PRESETS[mode]);
      if (this._isPlanar()) this.cam.zx *= 2.8;   // 판 데이터는 층이 뭉친다
      this.zoom = 1;
      this.draw();
    }

    /* 데이터가 층별 판인가(work_plane), 부피 큐브인가(volume).
     * 서로 다른 수직 과장이 필요해 한 번 재둔다. */
    _isPlanar() {
      if (this._planar === undefined) {
        const zs = new Set(this.d.voxels.map(v => Math.round(v.z * 10)));
        this._planar = zs.size <= 4;
      }
      return this._planar;
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
        // 위로 끌면 카메라가 올라가 위에서 내려다본다 — OrbitControls·CAD 관례다.
        // 종전에는 부호가 반대라 위를 보려고 위로 끌면 오히려 옆으로 누웠다.
        // 음의 pitch 는 아래에서 올려다보는 것이다. 상부 슬래브에 가린 위층을
        // 확인하려면 이 각도가 필요하다. 면 선택(_cubeFaces)이 부호를 본다.
        this.cam.yaw = drag.yaw + (e.clientX - drag.x) * 0.4;
        this.cam.pitch = Math.max(-85, Math.min(85, drag.pitch - (e.clientY - drag.y) * 0.3));
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

    /* 세계좌표 → 투영 평면. 화면 크기는 여기서 모른다.
     * z 도 피벗(_pivotZ, 그릴 것의 높이 중앙)을 빼고 돌린다. 안 빼면 회전축이
     * 지면에 놓여 위아래로 드래그할 때 모델이 축을 중심으로 휘둘린다. */
    _raw(x, y, z) {
      const S = this.d.site;
      const cx = S.width_m / 2, cy = S.depth_m / 2;
      const yaw = this.cam.yaw * DEG, pit = this.cam.pitch * DEG;
      const dx = x - cx, dy = y - cy;
      const dz = (z - (this._pivotZ || 0)) * (this.cam.zx || 1);

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

    /* 그릴 것의 월드 경계를 훑어 회전 피벗과 배율·중심을 정한다.
     *
     * **궤도 모드에서 투영 경계로 매 프레임 다시 맞추면 안 된다.** 각도가 바뀌면
     * 실루엣이 바뀌고, 배율과 중심이 그것을 따라다닌다. 이 데이터로 실측하니
     * yaw 한 바퀴에 배율이 7.23~10.37 로 **43% 출렁이고** bbox 중심이 **19.3m**
     * 미끄러졌다. 회전이 부자연스럽게 보이는 원인이 이것이다.
     *
     * 그래서 궤도 모드에서는 **yaw 전 구간의 최악값**으로 배율을 고정하고 중심을
     * 캔버스 한가운데에 못박는다. yaw 를 아무리 돌려도 배율·중심이 상수라
     * 모델이 제자리에서 돈다. 최악값은 월드 AABB 의 8꼭짓점만 훑으면 되고
     * (정사영이 아핀이며 원근 왜곡이 완만하다), 이 데이터에서 전 각도·전 점이
     * 캔버스 안에 들어옴을 확인했다. 대가는 가장 유리한 각도 대비 32% 작게
     * 보이는 것이다 — 종전 최소 배율보다는 2% 작을 뿐이다.
     *
     * 고정 각도인 2D·2.5D 는 종전대로 실제 투영 경계에 맞춘다. 각도가 안 바뀌니
     * 흔들릴 일이 없고, 화면을 꽉 채우는 편이 읽기 좋다.
     */
    _measure() {
      const S = this.d.site, d = this.d;
      const single = this.cam.single;
      const onlyOcc = this.opts.onlyOccupiable !== false;
      const hh = d.site.voxel_m / 2;
      const pad = 26;

      // ① 그릴 것의 월드 AABB. 피벗을 여기서 얻는다.
      let wx0 = Infinity, wy0 = Infinity, wz0 = Infinity;
      let wx1 = -Infinity, wy1 = -Infinity, wz1 = -Infinity;
      const world = (x, y, z) => {
        if (x < wx0) wx0 = x; if (x > wx1) wx1 = x;
        if (y < wy0) wy0 = y; if (y > wy1) wy1 = y;
        if (z < wz0) wz0 = z; if (z > wz1) wz1 = z;
      };
      d.voxels.forEach(v => {
        if (single && v.level !== this.opts.level) return;
        if (onlyOcc && v.occupiable === false) return;
        world(v.x, v.y, v.z - hh);
        world(v.x, v.y, v.z + hh);
      });
      const solids = this.opts.showSolids && d.solids && !single;
      if (solids) {
        d.solids.forEach(b => {
          world(b.x1, b.y1, b.z1); world(b.x2, b.y2, b.z2);
          world(b.x1, b.y2, b.z2); world(b.x2, b.y1, b.z1);
        });
      }
      if (!isFinite(wx0)) {           // 그릴 것이 없다 — 현장 크기로 대신한다
        wx0 = 0; wx1 = S.width_m; wy0 = 0; wy1 = S.depth_m; wz0 = 0; wz1 = 0;
      }
      this._pivotZ = (wz0 + wz1) / 2;

      const span = (pts) => {          // 현재 각도에서 투영 경계
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        pts.forEach(p => {
          const q = this._raw(p[0], p[1], p[2]);
          if (q.x < x0) x0 = q.x; if (q.x > x1) x1 = q.x;
          if (q.y < y0) y0 = q.y; if (q.y > y1) y1 = q.y;
        });
        return [x0, y0, x1, y1];
      };
      const scale = (b) => Math.min((this.W - pad*2) / Math.max(1e-6, b[2] - b[0]),
                                    (this.H - pad*2) / Math.max(1e-6, b[3] - b[1]));

      if (this.cam.orbit) {
        // ② 궤도 — 배율·중심을 각도와 **완전히 분리**한다.
        // 프리셋 기준각에서 yaw 한 바퀴의 최악값을 한 번만 재고, 모드·옵션·줌·
        // 캔버스 크기가 바뀔 때까지 그대로 쓴다. 드래그로는 절대 다시 재지 않으므로
        // 회전 중 배율이 변하지 않는다. 극단적인 각도에서는 가장자리가 넘칠 수
        // 있는데, 휠 줌으로 조절하는 편이 회전이 출렁이는 것보다 낫다.
        const key = [this.opts.mode, this.opts.level, this.opts.showSolids,
                     onlyOcc, Math.round(this.W), Math.round(this.H),
                     this.zoom.toFixed(3)].join('|');
        if (this._fitKey !== key) {
          const corners = [];
          for (const x of [wx0, wx1])
            for (const y of [wy0, wy1])
              for (const z of [wz0, wz1]) corners.push([x, y, z]);
          const keepY = this.cam.yaw, keepP = this.cam.pitch;
          this.cam.pitch = PRESETS[this.opts.mode].pitch;   // 기준각 — 재현 가능하게
          let s = Infinity;
          for (let a = 0; a < 360; a += 15) {
            this.cam.yaw = a;
            s = Math.min(s, scale(span(corners)));
          }
          this.cam.yaw = keepY; this.cam.pitch = keepP;
          this._fitKey = key;
          this._fit = { s: s * this.zoom, ox: this.W / 2, oy: this.H / 2 };
        }
        return;
      }

      // ③ 고정 각도 — 실제 투영 경계에 맞춘다
      const pts = [];
      d.voxels.forEach(v => {
        if (single && v.level !== this.opts.level) return;
        if (onlyOcc && v.occupiable === false) return;
        pts.push([v.x, v.y, v.z - hh], [v.x, v.y, v.z + hh]);
      });
      if (solids) {
        d.solids.forEach(b => {
          pts.push([b.x1,b.y1,b.z1], [b.x2,b.y2,b.z2],
                   [b.x1,b.y2,b.z2], [b.x2,b.y1,b.z1]);
        });
      }
      let b = pts.length ? span(pts)
                         : [-S.width_m/2, -S.depth_m/2, S.width_m/2, S.depth_m/2];
      const s = scale(b) * this.zoom;
      this._fit = { s, ox: this.W/2 - (b[0] + b[2])/2 * s,
                       oy: this.H/2 - (b[1] + b[3])/2 * s };
    }

    _quad(x, y, z, s) {
      const h = s / 2;
      return [[x - h, y - h, z], [x + h, y - h, z],
              [x + h, y + h, z], [x - h, y + h, z]]
        .map(p => this._project(p[0], p[1], p[2]));
    }

    /* 큐브의 **보이는 면만** 돌려준다.
     * 6면을 다 그리면 복셀 1만 개에 6만 폴리곤이라 회전이 버벅인다.
     * 정사영·원근 모두 카메라를 등진 면은 어차피 앞면에 가리므로 셋이면 된다.
     * 어느 셋인지는 yaw·pitch 부호로 정해진다. */
    _cubeFaces(x, y, z, s) {
      const h = s / 2;
      const P = (a, b, c) => this._project(a, b, c);
      const yaw = ((this.cam.yaw % 360) + 360) % 360;
      const east = (yaw > 180);            // +x 면이 보이는가
      const north = (yaw > 90 && yaw < 270);
      const sx = east ? h : -h, sy = north ? h : -h;
      // 위에서 보면 윗면, 아래에서 올려다보면 밑면이 보인다
      const sz = this.cam.pitch >= 0 ? h : -h;
      return [
        [P(x-h,y-h,z+sz), P(x+h,y-h,z+sz), P(x+h,y+h,z+sz), P(x-h,y+h,z+sz)],
        // x 쪽 옆면
        [P(x+sx,y-h,z-h), P(x+sx,y+h,z-h), P(x+sx,y+h,z+h), P(x+sx,y-h,z+h)],
        // y 쪽 옆면
        [P(x-h,y+sy,z-h), P(x+h,y+sy,z-h), P(x+h,y+sy,z+h), P(x-h,y+sy,z+h)],
      ];
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
      const flat = this.cam.pitch >= 89;      // 2D 는 판으로 그리는 게 읽기 쉽다
      const onlyOcc = this.opts.onlyOccupiable !== false;
      const s = d.site.voxel_m;
      // 큐브를 꽉 채우면 안쪽이 안 보인다. 살짝 줄여 사이가 비게 둔다.
      const cs = s * 0.86;
      const shade = [1.0, 0.82, 0.66];        // 윗면 / 옆면 둘 — 입체감

      d.voxels.forEach(v => {
        if (single && v.level !== this.opts.level) return;
        if (onlyOcc && v.occupiable === false) return;
        const p = v[key];
        if (p === undefined || p === null) return;

        const base = heat(p);
        const alpha = 0.30 + 0.55 * (1 - p);
        if (flat) {
          const pts = this._quad(v.x, v.y, v.z, s);
          items.push({ depth: pts.reduce((a,q)=>a+q.depth,0)/pts.length, pts,
                       fill: rgba(base, alpha), stroke: null });
          return;
        }
        this._cubeFaces(v.x, v.y, v.z, cs).forEach((f, fi) => {
          const dep = f.reduce((a, q) => a + q.depth, 0) / f.length;
          const c = base.map(ch => Math.round(ch * shade[fi]));
          items.push({ depth: dep, pts: f, fill: rgba(c, alpha), stroke: null });
        });
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
