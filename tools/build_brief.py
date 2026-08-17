"""주제 설명용 3장 요약 ― 지도교수 대상. 표지·목차·참고문헌 없음.

읽는 문서다. 전문용어를 그냥 쓰지 않고 슬라이드 안에서 풀어 쓴다.
수치는 outputs/*.json 에서 읽는다 ― 실험을 다시 돌리면 슬라이드도 따라 갱신된다.

폰트 함정 두 개 (둘 다 실제로 터졌다):
 1. python-pptx 의 font.name 은 <a:latin>(영문) 슬롯만 채운다. 한글은 <a:ea>(동아시아)
    슬롯을 보므로, ea 를 채우지 않으면 PowerPoint 에서 테마 기본값(맑은 고딕)으로 나온다.
    LibreOffice 는 latin 을 전체에 적용해 바뀐 것처럼 보이므로 렌더만으로는 못 잡는다.
    -> set_font() 가 latin·ea·cs 를 모두 채운다.
 2. 한글 폰트는 글리프 구멍이 많다. Hancom Gothic 에 U+2014(-)·U+2013(-)·U+2212(-) 가
    전부 없다. 대시는 U+2015, 빼기는 ASCII 하이픈.
    -> assert_glyphs() 가 저장 직전 폰트 cmap 과 대조해 빌드를 실패시킨다.
"""
import json
import os
from pathlib import Path

from PIL import Image
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.oxml.ns import qn
from pptx.util import Inches, Pt

import fonts

ROOT = Path(__file__).resolve().parents[1]
FIGS = ROOT / "outputs" / "figures"
# BRIEF_OUT 으로 출력 경로를 바꿀 수 있다.
# PowerPoint 가 파일을 열고 있으면 저장이 PermissionError 로 막히므로 그때 쓴다.
OUT = Path(os.environ.get("BRIEF_OUT") or (ROOT / "outputs" / "주제설명_3장.pptx"))

cp = json.loads((ROOT / "outputs" / "curve_params.json").read_text(encoding="utf-8"))
cm = json.loads((ROOT / "outputs" / "comparison.json").read_text(encoding="utf-8"))
sn = json.loads((ROOT / "outputs" / "sensitivity.json").read_text(encoding="utf-8"))
se = json.loads((ROOT / "outputs" / "site_eval.json").read_text(encoding="utf-8"))

GEO, PRO = cm["geometric"], cm["probabilistic"]
BASE_PCT = cp["baseline_P"] * 100
DLO, DHI = (v * 100 for v in sn["delta_WDR_range"])
MOVED = 8 - cm["overlap_camera_count"]
ALLC = sn["stripe_period_lambda"] + sn["scaffold_coverage"]
WLO = min(c["WDR_geometric"] for c in ALLC) * 100
WHI = max(c["WDR_probabilistic"] for c in ALLC) * 100
THR_PCT = int(se["threshold"] * 100)

NAVY = RGBColor(0x1F, 0x4E, 0x79)
BLUE = RGBColor(0x2E, 0x75, 0xB6)
BODY = RGBColor(0x2D, 0x2D, 0x2D)
MUTED = RGBColor(0x7E, 0x7E, 0x7E)
RULE = RGBColor(0xD8, 0xDE, 0xE5)
BOXBG = RGBColor(0xF2, 0xF7, 0xFC)
WARM = RGBColor(0xFD, 0xF3, 0xF3)
ALERT = RGBColor(0xC0, 0x00, 0x00)

FACE = fonts.FAMILY         # Pretendard. 사용자 폰트 폴더에 설치되어 있다
DASH = "—"             # em dash. Pretendard 는 글리프 구멍이 없다

T, SH_, B, L, C = 29, 20, 18, 16, 13
M, W, H = 0.62, 13.333, 7.5
CW = W - 2 * M

prs = Presentation()
prs.slide_width, prs.slide_height = Inches(W), Inches(H)
BLANK = prs.slide_layouts[6]


def set_font(run, name=FACE):
    """latin·ea·cs 를 모두 채운다. ea 가 비면 한글이 테마 기본 폰트로 나온다."""
    rPr = run._r.get_or_add_rPr()
    for tag in ("a:latin", "a:ea", "a:cs"):
        el = rPr.find(qn(tag))
        if el is None:
            el = rPr.makeelement(qn(tag), {})
            rPr.append(el)
        el.set("typeface", name)


def add(slide, text, x, y, w, h, size, color=BODY, bold=False, align=PP_ALIGN.LEFT,
        space_after=0, line=None, hang=None):
    tf = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h)).text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    for i, para in enumerate(text if isinstance(text, list) else [text]):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = align
        p.space_after = Pt(space_after)
        if line:
            p.line_spacing = line
        if hang:
            pPr = p._p.get_or_add_pPr()
            pPr.set("marL", str(int(Inches(hang))))
            pPr.set("indent", str(-int(Inches(hang))))
        runs = para if isinstance(para, list) else [(para, bold)]
        for txt, bd in [(r, False) if isinstance(r, str) else r for r in runs]:
            r = p.add_run(); r.text = txt
            r.font.size = Pt(size); r.font.bold = bd
            r.font.color.rgb = color
            set_font(r)
    return tf


def bullets(slide, items, x, y, w, h, size=L, gap=13, mark="\u25a0  "):
    add(slide, [[(mark, True), (a, True), (b, False)] for a, b in items],
        x, y, w, h, size, space_after=gap, line=1.26, hang=0.30)


def box(slide, x, y, w, h, fill, edge=None, round_=True, lw=1.2):
    sp = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE if round_ else MSO_SHAPE.RECTANGLE,
        Inches(x), Inches(y), Inches(w), Inches(h))
    sp.fill.solid(); sp.fill.fore_color.rgb = fill
    if edge:
        sp.line.color.rgb = edge; sp.line.width = Pt(lw)
    else:
        sp.line.fill.background()
    sp.shadow.inherit = False
    sp.text_frame.text = ""
    return sp


def title(slide, n, text, h=0.70):
    box(slide, M, 0.34, 0.075, h + 0.04, BLUE, round_=False)
    add(slide, f"{n}", M + 0.24, 0.32, 0.5, 0.5, SH_, BLUE, bold=True)
    add(slide, text, M + 0.64, 0.28, CW - 0.64, h, T, NAVY, bold=True, line=1.16)
    box(slide, M, 0.34 + h + 0.16, CW, 0.018, RULE, round_=False)
    return 0.34 + h + 0.42


def head(slide, text, x, y, w):
    add(slide, text, x, y, w, 0.46, SH_, BLUE, bold=True)
    return y + 0.50


def figure(slide, name, x, y, w):
    img = Image.open(FIGS / name)
    slide.shapes.add_picture(str(FIGS / name), Inches(x), Inches(y), width=Inches(w))
    return y + w * img.height / img.width


def cite(slide, text, y=6.94):
    add(slide, text, M, y, CW, 0.44, C, MUTED, line=1.3)


def new():
    return prs.slides.add_slide(BLANK)


# ══ 1. 문제 ════════════════════════════════════════════════════════════════
s = new()
y = title(s, "1", "AI CCTV 를 어디에 달아야 하는지, 정해진 기준이 없다")

CH = 5.86
x2 = M + CH + 0.34
hy = head(s, "지금 있는 기준", M, y, CH)
head(s, "국제표준은 있지만 사람 눈 기준이다", x2, y, CH)

bullets(s, [
    (f"성능 기준은 있다 {DASH} ", "「검출 정확도 90% 이상」. 다만 미리 모아둔 영상으로 잰 "
     "값이라 현장 조건은 빠져 있다."),
    (f"설치 기준은 없다 {DASH} ", "「설치 위치와 촬영 범위를 적정하게 유지」가 조항의 전부다. "
     "무엇이 적정인지 숫자가 없다."),
    (f"이미 지적됐다 {DASH} ", "LH 사용자 평가(2025.12)는 「운용 방식 조정」을 처방했다. "
     "무엇을 조정할지는 적혀 있지 않다."),
], M, hy, CH, 3.4, L, 15)

bullets(s, [
    (f"픽셀 기준이 있다 {DASH} ", "국제표준 IEC 62676-4(DORI). 1 m 를 몇 픽셀로 담아야 하는지 "
     "4단계(25·62.5·125·250 픽셀)로 정한다."),
    (f"사람에게 물어 만들었다 {DASH} ", "1958년, 사람이 표적을 절반 맞히는 지점을 재서 만든 "
     "값이다. AI 가 어디서 못 보는지는 잰 적이 없다."),
    (f"거리만 본다 {DASH} ", "내려다보는 각도, 가려진 정도에는 기준이 아예 없다. 합격·불합격 "
     "판정이라 카메라를 겹쳐 다는 이득도 셀 수 없다."),
], x2, hy, CH, 3.4, L, 15)

by = 5.62
box(s, M, by, CW, 1.22, BOXBG, BLUE, lw=1.4)
add(s, [
    [("연구 질문", True)],
    [("①  ", True), ("카메라 설치 조건 ― 거리, 내려다보는 각도, 가려진 정도 ― 이 "
                     "AI 의 안전모 미착용 검출률을 얼마나 바꾸는가?", False)],
    [("②  ", True), ("그 관계를 알고 배치를 다시 짜면, 카메라를 늘리지 않고 무엇이 나아지는가?",
                     False)],
], M + 0.36, by + 0.13, CW - 0.72, 1.08, L, NAVY, space_after=2, line=1.24)
cite(s, "LH「스마트 안전기술 도입·운용 가이드라인」; LH 스마트건설기술 사용자 평가(2025.12); "
        "IEC 62676-4:2014/2025; Johnson (1958)")

# ══ 2. 실측 ════════════════════════════════════════════════════════════════
s = new()
y = title(s, "2", "가장 큰 원인은 거리가 아니라 「가려짐」이었다")

fb = figure(s, "fig_curves.png", (W - 10.2) / 2, y - 0.14, 10.2)

cw3 = (CW - 0.72) / 3
cliffs = [
    ("카메라와의 거리", "60 m 넘으면 떨어진다", "40 m 까지는 94% 를 유지"),
    ("내려다보는 각도", "61° 에서 무너진다", "45° 까지는 거의 영향 없음"),
    ("가려진 정도", "15% 만 가려도 72%", "셋 중 가장 치명적"),
]
cy = fb + 0.14
for i, (h_, hit, sub) in enumerate(cliffs):
    cx = M + i * (cw3 + 0.36)
    hot = i == 2
    box(s, cx, cy, cw3, 1.06, WARM if hot else BOXBG, ALERT if hot else BLUE,
        lw=1.6 if hot else 1.1)
    add(s, h_, cx + 0.24, cy + 0.10, cw3 - 0.48, 0.32, C, ALERT if hot else MUTED)
    add(s, hit, cx + 0.24, cy + 0.38, cw3 - 0.48, 0.40, B, ALERT if hot else NAVY, bold=True)
    add(s, sub, cx + 0.24, cy + 0.73, cw3 - 0.48, 0.30, C, MUTED)

add(s, [[(f"어떻게 쟀나 {DASH} ", True),
         (f"안전모 사진 {cp['n_images']}장을 흐리게(거리) · 기울여(각도) · 세로줄로 "
          f"가려(가려짐) 총 {cp['n_conditions']}가지 상태로 변형하고, 상태마다 AI 가 안전모 "
          f"미착용을 몇 % 찾아내는지 셌다. 세 조건의 영향을 각각 구해 곱하는 식으로 정리했고, "
          f"{cp['n_conditions']}개 실측값을 {cp['r2_full_grid']*100:.1f}% 설명한다. "
          f"재보지 않은 범위는 추측하지 않고 0 으로 둔다.", False)]],
    M, cy + 1.20, CW, 0.78, C, BODY, line=1.34, hang=0.92)
cite(s, f"세로축은 조건을 걸지 않았을 때({BASE_PCT:.1f}%) 대비 비율 · 점은 실측값, 선은 "
        f"정리한 식 · 검출기는 안전모 사진으로 추가 학습시킨 YOLOv8n")

# ══ 3. 적용 ════════════════════════════════════════════════════════════════
s = new()
y = title(s, "3", f"카메라 8대 그대로, {MOVED}대만 옮기니 사각지대가 절반이 됐다")

fb = figure(s, "fig_result.png", M - 0.05, y - 0.10, 7.35)

px = M + 7.48
pw = CW - 7.48
hy = head(s, "계산 순서", px, y - 0.06, pw)
bullets(s, [
    ("현장을 칸으로 나눈다 ", f"{DASH} {se['site']['width_m']}×{se['site']['depth_m']} m 를 "
     f"{se['site']['voxel_m']} m 격자 1,500칸으로. 칸마다 위험도 1~5점."),
    ("칸마다 조건을 잰다 ", f"{DASH} 칸에 사람 크기 막대를 세우고 카메라 쪽으로 빛을 쏴 "
     "거리·각도·가려진 정도를 구한다."),
    ("검출확률로 바꾼다 ", f"{DASH} 2번에서 만든 식에 그 세 숫자를 넣는다."),
    ("카메라를 합친다 ", f"{DASH} 한 대가 놓쳐도 다른 대가 잡는다. 겹칠수록 확률이 오른다."),
    ("8대를 고른다 ", f"{DASH} 제일 좋은 자리를 한 대씩 8번. 기존 기준과 제안 기준으로 각각 "
     "돌려 같은 자로 비교한다."),
], px, hy, pw, 4.5, C + 1, 11, mark="")

sy = 4.84
box(s, M, sy, 7.28, 2.02, BOXBG, BLUE, lw=1.2)
add(s, [
    [(f"공정하게 비교했나 {DASH} ", True),
     ("기존 기준에도 국제표준의 최소 픽셀 조건을 걸어 실무 수준으로 올리고, "
      "4단계 중 기존 방식에 가장 유리한 단계를 골랐다.", False)],
    [(f"수치를 믿을 수 있나 {DASH} ", True),
     (f"근거 없는 값 2개를 바꿔가며 다시 계산하면 검출률 자체는 {WLO:.1f}~{WHI:.1f}% 로 "
      f"흔들린다. 그래도 두 방식의 차이는 항상 +{DLO:.2f}~+{DHI:.2f}%p 다.", False)],
    [(f"한계 {DASH} ", True),
     ("사진을 흐리게·기울여 만든 것이라 실제 원거리 촬영과 다르고, 가상 현장이다. "
      "그래서 절대 수치가 아니라 관계만 주장한다.", False)],
], M + 0.30, sy + 0.15, 6.68, 1.76, C - 1, NAVY, space_after=8, line=1.32)

cite(s, f"위험가중 검출률 = 위험한 칸에 가중치를 주고 평균한 검출확률 · "
        f"사각지대 = 검출확률이 {THR_PCT}% 미만인 칸")


def assert_glyphs():
    """쓰인 문자가 폰트에 다 있는지 확인한다. 없으면 파일을 만들지 않고 실패한다."""
    texts = [sh.text_frame.text
             for sl in prs.slides for sh in sl.shapes if sh.has_text_frame]
    fonts.assert_glyphs(texts, where="슬라이드")


def assert_font_slots():
    """모든 런에 latin·ea·cs 가 채워졌는지 확인한다.

    ea 가 비면 PowerPoint 에서 한글만 테마 기본 폰트로 나온다.
    LibreOffice 렌더로는 잡히지 않으므로 여기서 막는다.
    """
    miss = 0
    for sl in prs.slides:
        for sh in sl.shapes:
            if not sh.has_text_frame:
                continue
            for p in sh.text_frame.paragraphs:
                for r in p.runs:
                    rPr = r._r.find(qn("a:rPr"))
                    if rPr is None:
                        miss += 1
                        continue
                    for tag in ("a:latin", "a:ea", "a:cs"):
                        el = rPr.find(qn(tag))
                        if el is None or el.get("typeface") != FACE:
                            miss += 1
    if miss:
        raise SystemExit(f"폰트 슬롯이 비어 있는 런 {miss}개 ― set_font() 확인")


assert_glyphs()
assert_font_slots()
prs.save(str(OUT))
print("saved:", OUT.name, "| slides:", len(prs.slides._sldIdLst), "| font:", FACE)
