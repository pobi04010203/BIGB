/* 색의 단일 출처. tokens.css 가 정본이고 이 파일은 그것을 읽기만 한다.
 *
 * 종전에는 `heat()` 가 index.html 과 viewer.js 에 **복제**돼 있었다. 하나만
 * 고치면 조용히 어긋난다. 여기로 합친다.
 *
 * 캔버스는 oklch() 문자열을 보간하지 못하므로 RGB 삼원색이 필요하다. 값을
 * 다시 적어두면 그것이 또 하나의 출처가 되므로, **브라우저에게 변환을 시킨다** —
 * 프로브 요소의 color 에 토큰을 넣고 getComputedStyle 로 되읽으면 rgb() 로
 * 해석된 값이 나온다. tokens.css 를 고치면 여기 값도 따라온다.
 */
(function (global) {
  'use strict';

  /* 토큰 문자열 -> [r,g,b].
   *
   * getComputedStyle 로 되읽는 방법은 못 쓴다 - 크롬은 oklch() 를 rgb 로
   * 낮추지 않고 색 공간을 보존한 문자열 그대로 돌려준다(실측 확인). 그래서
   * **캔버스에게 칠하게 시키고 픽셀을 읽는다.** 캔버스는 어떤 CSS 색이든
   * 받아 sRGB 로 래스터라이즈하므로 변환기가 따로 필요 없다.
   */
  var px = null;
  function ctx1() {
    if (!px) {
      var cv = document.createElement('canvas');
      cv.width = cv.height = 1;
      px = cv.getContext('2d', { willReadFrequently: true });
    }
    return px;
  }

  function resolve(cssValue) {
    var c = ctx1();
    c.clearRect(0, 0, 1, 1);
    c.fillStyle = '#000';
    c.fillStyle = cssValue;                 // 못 읽는 값이면 앞의 #000 이 남는다
    c.fillRect(0, 0, 1, 1);
    var d = c.getImageData(0, 0, 1, 1).data;
    return [d[0], d[1], d[2]];
  }

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  /* 발산 램프의 정지점. 위치는 P 값이다 — 임계 0.5 가 중점에 온다. */
  var STOPS = [
    { at: 0.00, tok: '--scale-0'   },
    { at: 0.25, tok: '--scale-25'  },
    { at: 0.50, tok: '--scale-mid' },
    { at: 0.75, tok: '--scale-75'  },
    { at: 1.00, tok: '--scale-1'   },
  ];
  var rgbCache = null;
  function stops() {
    if (!rgbCache) rgbCache = STOPS.map(function (s) {
      return { at: s.at, rgb: resolve(token(s.tok)) };
    });
    return rgbCache;
  }

  /* P(0~1) → [r,g,b]. 정지점 사이를 선형 보간한다. */
  function heat(p) {
    var S = stops();
    var v = p <= 0 ? 0 : (p >= 1 ? 1 : p);
    for (var i = 1; i < S.length; i++) {
      if (v <= S[i].at) {
        var a = S[i - 1], b = S[i];
        var t = (v - a.at) / (b.at - a.at);
        return a.rgb.map(function (c, k) { return Math.round(c + (b.rgb[k] - c) * t); });
      }
    }
    return S[S.length - 1].rgb.slice();
  }

  function rgba(c, alpha) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')'; }
  function css(c) { return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'; }

  /* 임계 미달인가. 색 말고 **테두리**로도 표시하기 위한 판정이다 —
   * 색 하나로만 판정을 전달하면 색약 사용자에게는 신호가 없다. */
  function isFail(p, threshold) { return p < (threshold == null ? 0.5 : threshold); }

  var uiCache = {};
  function ui(name) {                       // 무채색 UI 색 (카메라·경계 등)
    if (!(name in uiCache)) uiCache[name] = resolve(token(name));
    return uiCache[name];
  }

  global.Theme = { heat: heat, rgba: rgba, css: css, token: token,
                   ui: ui, isFail: isFail, stops: stops };
})(window);
