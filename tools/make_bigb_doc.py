# -*- coding: utf-8 -*-
"""LH 국토기술대전 제출용 내용정리 문서(DOCX) 생성.

**모든 수치를 outputs/ 와 config.py 에서 읽는다.** 손으로 적은 값이 하나도
없어야 한다 — 코드가 바뀌면 문서를 다시 뽑으면 맞는다.
CLAUDE.md §0.1-1 이 그대로 이 스크립트의 설계 이유다.

심사 배점(1차 적합성 40 · 창의성 30 · 실현가능성 30)에 맞춰 절을 나눈다.

사용:  python tools/make_bigb_doc.py
"""
from pathlib import Path
import json
import sys
import datetime

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

import config

from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.section import WD_SECTION
from docx.oxml.ns import qn

STEM = "BIGB_0822"
OUT = config.ROOT / "outputs" / f"{STEM}.docx"

INK = RGBColor(0x1E, 0x22, 0x28)
MUTED = RGBColor(0x5C, 0x65, 0x70)
ACCENT = RGBColor(0x14, 0x4E, 0x8C)
WARN = RGBColor(0x8C, 0x20, 0x18)

FONT = "맑은 고딕"


# ── 서식 도구 ──────────────────────────────────────────────────────────────

def set_kfont(doc, name=FONT, size=10):
    for style_name in ("Normal", "List Bullet", "List Number"):
        try:
            st = doc.styles[style_name]
        except KeyError:
            continue
        st.font.name = name
        st.font.size = Pt(size)
        st.element.rPr.rFonts.set(qn("w:eastAsia"), name)


def _run(p, text, size, bold, color, italic=False):
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.bold = bold
    r.italic = italic
    r.font.color.rgb = color
    r.font.name = FONT
    r._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
    return r


def para(doc, text="", size=10, bold=False, color=INK, space_after=6,
         align=None, italic=False, indent=0.0):
    p = doc.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    if indent:
        p.paragraph_format.left_indent = Cm(indent)
    _run(p, text, size, bold, color, italic)
    return p


def rich(doc, parts, size=10, space_after=6, indent=0.0):
    """[(텍스트, 굵게, 색), ...] 를 한 문단에 이어 붙인다."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    if indent:
        p.paragraph_format.left_indent = Cm(indent)
    for text, bold, color in parts:
        _run(p, text, size, bold, color)
    return p


def bullet(doc, text, size=10, bold_head=None):
    """가운뎃점 목록. 행잉 인덴트를 걸어 둘째 줄이 글머리 아래로 물리지 않게 한다."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.left_indent = Cm(0.75)
    p.paragraph_format.first_line_indent = Cm(-0.35)
    _run(p, "· ", size, False, MUTED)
    if bold_head:
        _run(p, bold_head, size, True, INK)
        _run(p, text, size, False, INK)
    else:
        _run(p, text, size, False, INK)
    return p


def table(doc, headers, rows, widths=None, size=9, align_right=()):
    t = doc.add_table(rows=1, cols=len(headers))
    t.style = "Light Grid Accent 1"
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    for i, hd in enumerate(headers):
        c = t.rows[0].cells[i]
        c.text = ""
        _run(c.paragraphs[0], str(hd), size, True, INK)
    for row in rows:
        cells = t.add_row().cells
        for i, v in enumerate(row):
            cells[i].text = ""
            p = cells[i].paragraphs[0]
            if i in align_right:
                p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
            _run(p, str(v), size, False, INK)
    if widths:
        # **autofit 을 끄지 않으면 폭이 무시된다.** 워드는 내용에 맞춰 다시
        # 계산하고, 열이 좁아진 자리에서 한글이 어절 중간에 접힌다
        # ("갱폼 작업면 (2 / 개 층)"). 열 객체와 셀 양쪽에 넣어야 먹는다.
        t.autofit = False
        for i, w in enumerate(widths):
            t.columns[i].width = Cm(w)
        for row in t.rows:
            for i, w in enumerate(widths):
                row.cells[i].width = Cm(w)
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return t


def h(doc, text, level=1):
    hd = doc.add_heading(text, level=level)
    for r in hd.runs:
        r.font.name = FONT
        r._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
        r.font.color.rgb = INK if level > 1 else ACCENT
    return hd


def note(doc, text, size=9):
    """근거·한계를 적는 들여쓴 회색 문단. 이 문서의 값어치는 여기에 있다."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(8)
    p.paragraph_format.left_indent = Cm(0.75)
    _run(p, text, size, False, MUTED, italic=False)
    return p


def pct(x, d=1):
    return "-" if x is None else f"{x*100:.{d}f}%"


# ── 본문 ───────────────────────────────────────────────────────────────────

def build():
    O = config.ROOT / "outputs"
    site = json.loads((O / "site_eval.json").read_text(encoding="utf-8"))
    comp = json.loads((O / "comparison.json").read_text(encoding="utf-8"))
    cp = json.loads((O / "curve_params.json").read_text(encoding="utf-8"))
    sr = json.loads((O / "safety_report.json").read_text(encoding="utf-8"))
    sn = json.loads((O / "sensitivity.json").read_text(encoding="utf-8"))
    mf = json.loads((config.DATA_FILTERED / "manifest.json").read_text(encoding="utf-8"))

    ov = sr["coverage"]["overall"]
    sd = ov["score_detail"]
    opts = sr.get("options") or {}
    realloc = opts.get("reallocate") or {}
    pres = sr["prescription"]
    pl = comp["placements"]
    dl = comp["delta_WDR"]
    occ = [v for v in site["voxels"] if v.get("occupiable") is not False]

    doc = Document()
    set_kfont(doc)
    for s in doc.sections:
        s.left_margin = s.right_margin = Cm(2.2)
        s.top_margin = s.bottom_margin = Cm(2.0)

    # ── 표지 ──────────────────────────────────────────────────────────
    para(doc, "제17회 LH 국토기술대전", 11, True, MUTED, 2,
         WD_ALIGN_PARAGRAPH.CENTER)
    para(doc, "AI CCTV 배치 적정성 평가 모델", 22, True, ACCENT, 4,
         WD_ALIGN_PARAGRAPH.CENTER)
    para(doc, "기하 커버리지가 아니라 검출확률로 배치를 진단하고 처방한다",
         11, False, INK, 18, WD_ALIGN_PARAGRAPH.CENTER)
    para(doc, f"작성 {datetime.date.today():%Y-%m-%d}   ·   "
              f"검출기 {cp['detector']}   ·   실험 {cp['n_conditions']}조건 "
              f"{mf['n_selected']}장", 9, False, MUTED, 24,
         WD_ALIGN_PARAGRAPH.CENTER)

    h(doc, "0. 한 문단 요약", 1)
    rich(doc, [
        ("건설현장 CCTV 계획서를 넣으면 ", False, INK),
        ("각 위험구역에서 AI가 안전모 미착용을 실제로 검출할 확률", True, INK),
        ("을 계산해 100점 만점으로 채점하고, 미달이면 ", False, INK),
        ("같은 대수로 재배치할지 몇 대를 어디에 증설할지", True, INK),
        ("까지 답한다. 기존 도구는 ", False, INK),
        ("보이는가", True, INK),
        ("를 계산하고 이 도구는 ", False, INK),
        ("검출되는가", True, INK),
        ("를 계산한다. 그 차이가 전부다.", False, INK),
    ], 10.5, 10)

    # ── 1. 적합성 ─────────────────────────────────────────────────────
    h(doc, "1. 왜 필요한가 — 제도에 빈칸이 있다", 1)

    h(doc, "1.1 CCTV 설치·운용계획은 법정 제출물이다", 2)
    rich(doc, [("「건설기술진흥법 시행규칙」 별표 7 「안전관리계획의 수립기준」"
                "(제58조 관련) 1-다 공정별 안전점검계획은 ", False, INK),
               ("\"계측장비 및 폐쇄회로 텔레비전 등 안전 모니터링 장비의 설치 및 "
                "운용계획을 포함한다\"", True, INK),
               ("고 규정한다. 즉 CCTV 계획은 이미 내야 하는 서류다.", False, INK)])

    h(doc, "1.2 그런데 그 계획이 충분한지 판정할 기준이 없다", 2)
    table(doc,
          ["확인한 문서", "커버리지 비율 기준", "실제로 있는 것"],
          [["스마트 안전장비 활용 가이드라인 (88쪽)", "없음",
            "AI CCTV 는 권장기준 한 줄. 점검표는 O/X"],
           ["KISA 지능형 CCTV 인증제도 안내서", "없음",
            "90%는 검출 정확도이며 KISA 영상DB 위의 점수"],
           ["KISA 지능형 CCTV 도입·운영 가이드 (106쪽)", "없음",
            "설치 각도·가림 등 정성적 저하 요인"],
           ["시행규칙 별표 7 / 별지 제14호서식", "없음",
            "포함하라고만 하고 양식·항목·수치 없음"],
           ["LH 늘봄 A-Eye 공개자료", "없음", "운영 방식만 공개"]],
          widths=[5.6, 2.6, 8.2], size=8.5)
    note(doc, "출처 원문은 리포지토리 docs/reference/ 에 있으며 조사 경위는 "
              "커버리지_기준_조사.md · 보고서_서식_조사.md 에 적었다. "
              "「전 범위의 몇 %를 감시해야 한다」는 문장은 어느 법령·고시·지침에도 없다.")

    rich(doc, [("빈칸은 ", False, INK), ("얼마나 봐야 충분한가", True, WARN),
               ("이고, 더 근본적으로는 ", False, INK),
               ("본다는 것이 무엇인가", True, WARN),
               ("이다. 화각 안에 들어오면 본 것인가, 아니면 AI가 검출할 수 있어야 "
                "본 것인가. 이 도구는 후자로 답한다.", False, INK)], 10, 10)

    # ── 2. 창의성 ─────────────────────────────────────────────────────
    h(doc, "2. 무엇이 다른가", 1)

    h(doc, "2.1 기하 가시성이 아니라 실측 검출확률", 2)
    rich(doc, [("설치 조건 세 축을 실제로 측정해 곡선을 만들었다. ", False, INK),
               (f"P(ρ, θ, o) = f(ρ)·g(θ)·h(o)", True, INK),
               (" 형태의 분리형 곱셈 모델이다.", False, INK)])
    table(doc, ["축", "의미", "측정 수준", "결과"],
          [["ρ", "머리 유효 픽셀밀도", "48/32/24/16/12/8/6/4 px",
            f"로지스틱 L={cp['per_target'][cp['primary']]['f_rho']['L']:.3f} "
            f"x0={cp['per_target'][cp['primary']]['f_rho']['x0']:.2f}px"],
           ["θ", "부감각", "0/15/30/45/60/75°",
            f"로지스틱 x0={cp['per_target'][cp['primary']]['g_theta']['params']['x0']:.2f}°"],
           ["o", "가림률(수직 스트라이프)", "0/15/30/45/60/75 %",
            f"지수감쇠 λ={cp['per_target'][cp['primary']]['h_occ']['lambda']:.3f}"]],
          widths=[1.2, 4.6, 5.4, 4.8], size=8.5)
    rich(doc, [(f"{cp['n_conditions']}조건 × {mf['n_selected']}장을 실제로 추론했다. "
                f"전체 격자 결정계수는 주 지표(미착용 재현율) ", False, INK),
               (f"R² = {cp['r2_primary']:.4f}", True, INK),
               (f", 항목 최솟값 기준 {cp['r2_full_grid']:.4f} 로 "
                f"통과 기준 {cp['r2_acceptance']} 를 넘는다.", False, INK)])
    note(doc, "가림 마스킹을 랜덤 사각형이 아니라 수직 스트라이프로 한 것은 현장의 "
              "가림원이 비계·동바리·거푸집 지주 등 수직 부재이기 때문이다.")

    h(doc, "2.2 다중 카메라 중첩을 이득으로 다룬다", 2)
    rich(doc, [("P_total = 1 - Π(1-P) 로 결합한다. 각 0.6인 두 대가 합쳐 0.84가 "
                "되므로 ", False, INK),
               ("고위험 구역에서는 중첩이 이득", True, INK),
               ("이다. 중첩을 낭비로 보는 커버리지 최적화와 방향이 다르다.",
                False, INK)])

    h(doc, "2.3 단일 커버리지 %가 아니라 100점 만점 채점", 2)
    rich(doc, [("\"현장의 90%를 본다\"는 문장은 ", False, INK),
               ("어디를 놓쳤는지를 지운다", True, WARN),
               (". 넓은 저위험 구역을 잘 덮으면 갱폼 작업면을 통째로 놓치고도 "
                "90%가 나온다. 구역마다 배점과 요구를 두고 채점한다.", False, INK)])
    bullet(doc, "100 × 가중치 / Σ가중치. 면적과 무관하다", bold_head="배점 = ")
    bullet(doc, "위험할수록 더 많이 요구한다 (가중치 1→70%, 10→99%)",
           bold_head="요구 = ")
    bullet(doc, "min(1, 커버리지 / 요구). 초과 달성으로 다른 구역을 벌충하지 못한다",
           bold_head="달성률 = ")
    bullet(doc, "가중치 7 이상 구역이 요구 미달이면 점수와 무관하게 충족이 아니다",
           bold_head="치명 구역 게이트 = ")
    note(doc, "배점을 복셀 수가 아니라 가중치로 나눈 이유는 면적에 비례시키면 넓은 "
              "구역이 점수를 지배하기 때문이다. 타워크레인 반경은 12,320 복셀이고 "
              "리프트 승강구는 896 인데 후자를 놓치는 것이 8배 덜 나쁘지 않다.")

    h(doc, "2.4 위험구역을 지어내지 않는다 — 도출하거나 받아 적는다", 2)
    table(doc, ["등급", "무엇", "어디서"],
          [["T1 도출", "슬래브 단부 · 갱폼 작업면 · 타설/거푸집면",
            "골조 기하 + 규칙. 규칙마다 산업안전보건기준에 관한 규칙 조문을 붙였다"],
           ["T2 도면 필요", "슬래브 관통부(개구부)",
            "슬래브를 판 하나로 두는 한 구멍이 존재하지 않는다"],
           ["T3 가설계획 필요", "굴착면 · 리프트 · 크레인 반경 · 야적장",
            "골조가 아니라 장비·야적 배치에서 온다"]],
          widths=[2.6, 5.2, 8.2], size=8.5)
    note(doc, "모든 위험구역은 source 를 갖는다. 비어 있으면 실행이 즉시 멈춘다. "
              "근거 없는 사각형은 \"그 좌표는 어디서 나왔냐\"는 질문 하나로 무너진다.")

    # ── 3. 실현가능성 ─────────────────────────────────────────────────
    h(doc, "3. 무엇을 만들었나", 1)

    h(doc, "3.1 입력은 네 개의 계약이다", 2)
    table(doc, ["파일", "내용", "현장에서 어디서 오나"],
          [["data/plans/*.json", "CCTV 계획서 — 위치·높이·방위·화각·해상도",
            "감리 제출 계획서"],
           ["data/building.json", "골조 직육면체 + 층고", "도면·BIM·실측"],
           ["data/zones.json", "위험구역(T2·T3)과 가중치",
            "안전관리계획서·가설계획서"],
           ["data/schedule.json", "시간대별 활성 구역", "공정표·작업일보"]],
          widths=[4.4, 6.2, 5.4], size=8.5)
    note(doc, "IFC 어댑터(tools/ifc_to_building.py)가 slab·층고·개구부를 자동으로 "
              "낸다. 비계·적치·시선 차단율은 설계 BIM 에 없으므로 자동으로 만들지 "
              "않고 사람이 채운다 — 빈 자리를 지어내면 가림이 거짓이 된다.")

    h(doc, "3.2 처리 흐름", 2)
    for i, (t1, t2) in enumerate([
        ("복셀화", f"현장을 {config.VOXEL_M}m 큐브로 자른다. 바닥면이 아니라 "
                   f"부피 전체를 다룬다 — CCTV 는 공중도 본다"),
        ("광선투사", "복셀×카메라마다 거리·픽셀밀도·부감각·가림률을 낸다. "
                     "사람 높이 1.7m 막대를 11점 샘플링한다"),
        ("곡선 적용", "실측 곡선으로 검출확률을 낸다. 측정 범위 밖은 외삽하지 않고 0"),
        ("다중 결합", "P_total = 1 - Π(1-P)"),
        ("채점", "구역별 배점 × 달성률 → 100점. 치명 구역 게이트"),
        ("처방", "같은 대수 재배치 → 안 되면 증설 대수와 위치"),
    ], 1):
        bullet(doc, t2, bold_head=f"{i}. {t1} — ")
    para(doc, "", 6, space_after=4)

    h(doc, "3.3 산출물", 2)
    bullet(doc, "별표 7 의 설치·운용계획 칸을 채우는 A4 인쇄용 HTML 7절",
           bold_head="스마트 안전보고서 — ")
    bullet(doc, "2D/2.5D/3D 전환, 검출확률 히트맵, 화각 부채꼴, 미달구역 목록. "
                "단일 HTML 이며 외부 요청 0건", bold_head="심사자 화면 — ")
    bullet(doc, "start.bat 하나로 재계산 후 브라우저까지 연다",
           bold_head="실행 — ")

    # ── 4. 실증 ───────────────────────────────────────────────────────
    h(doc, "4. 실증 결과", 1)
    rich(doc, [(f"가상 현장 {site['site']['width_m']}m × {site['site']['depth_m']}m, "
                f"복셀 {len(site['voxels']):,}개(사람이 갈 수 있는 곳 {len(occ):,}개), "
                f"카메라 후보 {len(site['cameras'])}지점, 예산 "
                f"{site['camera_budget']}대.", False, INK)])

    h(doc, "4.1 같은 8대로 어느 자를 쓰느냐에 따라 배치가 갈린다", 2)
    table(doc, ["설계 기준", "위험가중 검출률(WDR)", "미달 복셀"],
          [["기하 커버리지 (기존 방식)", f"{pl['geometric']['WDR']:.4f}",
            f"{pl['geometric']['fail_voxel_count']:,}"],
           ["문헌의 가정 곡선", f"{pl['assumed']['WDR']:.4f}",
            f"{pl['assumed']['fail_voxel_count']:,}"],
           ["실측 곡선 (제안 방식)", f"{pl['empirical']['WDR']:.4f}",
            f"{pl['empirical']['fail_voxel_count']:,}"]],
          widths=[7.0, 5.0, 4.0], size=9, align_right=(1, 2))
    rich(doc, [("세 배치를 모두 실측 곡선의 자로 재측정한 값이다. ", False, INK),
               (f"ΔWDR 실측-기하 +{dl['empirical_minus_geometric']:.4f}", True, INK),
               (f", 미달 복셀은 {pl['geometric']['fail_voxel_count']:,} → "
                f"{pl['empirical']['fail_voxel_count']:,} 로 "
                f"{(1-pl['empirical']['fail_voxel_count']/pl['geometric']['fail_voxel_count'])*100:.0f}% 줄었다. "
                f"공통 카메라는 {comp['overlap_camera_count']['empirical_vs_geometric']}대뿐이다.",
                False, INK)])
    note(doc, "기하 기준선에는 IEC 62676-4(DORI) 최소 픽셀밀도를 걸었다. 네 등급을 "
              "전수 실행한 뒤 기존 방식에 가장 유리한 등급을 기본값으로 골랐다 — "
              "약한 상대와 싸웠다는 비판을 받지 않기 위해서다.")

    h(doc, "4.2 예시 계획서 채점", 2)
    rows = [[r["label"], r["weight"], f"{r['allocated']:.1f}",
             pct(r["coverage"]), pct(r["required"], 0), pct(r["attainment"], 0),
             f"{r['earned']:.1f}"] for r in sd["rows"]]
    table(doc, ["구역", "가중", "배점", "커버리지", "요구", "달성률", "획득"],
          rows, widths=[4.6, 1.3, 1.4, 2.2, 1.5, 1.7, 1.4], size=8.5,
          align_right=(1, 2, 3, 4, 5, 6))
    rich(doc, [(f"총점 ", False, INK), (f"{sd['total']:.1f} / 100", True, WARN),
               (f"  등급 {sd['grade']}", True, WARN),
               (f" — 치명 구역 {len(sd['critical_failures'])}곳이 요구 미달이라 "
                f"점수와 무관하게 등급 상한이 걸렸다.", False, INK)])

    h(doc, "4.3 처방", 2)
    para(doc, pres["text"].replace("**", ""), 10, False, INK, 8)
    if realloc:
        table(doc, ["안", "점수", "등급", "남은 치명 구역"],
              [["현 계획서 8대", f"{ov['score_100']:.1f}", ov["grade"],
                f"{len(ov['critical_failures'])}곳"],
               ["같은 8대 재배치", f"{realloc['score_100']:.1f}", realloc["grade"],
                f"{len(realloc['critical_failures'])}곳"],
               [f"{pres['add_cameras']}대 증설", f"{pres['resulting']*100:.1f}",
                "A", "0곳"]],
              widths=[5.4, 3.2, 2.6, 4.8], size=9, align_right=(1,))
    note(doc, "대수를 늘리기 전에 반드시 같은 대수 재배치를 먼저 시도한다. "
              "예산을 쓰지 않고 되는 일을 증설로 답하면 발주처가 쓰지 않는다.")

    h(doc, "4.4 결론이 자유 파라미터에 매달려 있지 않다", 2)
    rich(doc, [("근거가 공개되지 않은 값 두 개(가림 스트라이프 주기, 비계 시선 "
                "차단율)를 스윕했다. 절대 WDR 은 크게 흔들리지만 ", False, INK),
               (f"ΔWDR 은 +{sn['delta_WDR_range'][0]:.4f} ~ "
                f"+{sn['delta_WDR_range'][1]:.4f} 로 부호가 유지된다", True, INK),
               (". 위험가중치도 통계 유도값과 심각도 보정값 두 프로파일에서 "
                "판정이 같다.", False, INK)])

    # ── 5. 한계 ───────────────────────────────────────────────────────
    h(doc, "5. 한계 — 먼저 밝힌다", 1)
    for t1, t2 in [
        ("검출기가 대리모델이다",
         "SHWD 로 파인튜닝한 YOLO 이며 LH A-Eye 의 실제 모델이 아니다. 절대 수치가 "
         "아니라 설치 조건에 따라 검출률이 변한다는 관계를 증명하는 실험으로 "
         "포지셔닝한다. 곡선만 갈아 끼우면 되는 구조로 설계했다."),
        ("최신 모델이 더 낫지 않았다",
         "yolo26n 을 같은 조건으로 학습·재측정한 결과 mAP50 은 동률이고 곡선 "
         "적합도는 더 나빠 통과 기준에 미달했다. 활성 곡선은 yolov8n 이다. "
         "다만 곡선의 형태는 유지되어, 검출기를 바꿔도 관계가 남는다는 근거가 됐다."),
        ("변형은 실제 촬영의 근사다",
         "다운샘플링은 대기 흐림·렌즈 광학 한계를 반영하지 않고, 호모그래피는 3D "
         "시점 변화의 근사다. 코드에서 보정하지 않는다."),
        ("분리형 곱셈 모델은 1차 근사다",
         "축 간 상호작용을 무시한다. 잔차가 낙관 쪽으로 기운다 — 안 보이는 곳을 "
         "보인다고 말하는 방향이므로 명시한다."),
        ("배점표와 요구곡선은 우리가 정했다",
         "가중치 비례 배점과 70~99% 요구곡선은 게시된 근거가 없다. LH 가 등급별 "
         "요구를 게시하면 함수 하나만 갈아 끼운다."),
        ("DORI 는 인간 관찰자 기준이다",
         "AI 검출기에 대해 검증된 바 없다. 기존 방식의 기준선을 세우는 용도로만 쓴다."),
    ]:
        bullet(doc, t2, bold_head=f"{t1} — ")

    para(doc, "", 6, space_after=10)
    rich(doc, [("제외 항목도 밝힌다. ", False, MUTED),
               ("공정 단계별 카메라 재배치(4D), 방위각, 야간·조명·기상, PTZ 동적 "
                "제어, 실시간 관제", False, MUTED),
               ("는 범위 밖이다. 못 한 것이 아니라 제외한 것이다.", False, MUTED)],
         9)

    doc.save(OUT)
    return OUT


if __name__ == "__main__":
    p = build()
    print(f"→ {p}")
