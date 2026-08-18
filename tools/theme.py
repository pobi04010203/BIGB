"""사료적·편집 디자인 토큰.

hallmark(anti-AI-slop) 의 editorial 장르 규칙을 따른다:
  - 순백·순흑 금지. 종이와 잉크를 앵커 색조 쪽으로 틔운다
  - 카드 테두리 대신 헤어라인
  - 강조색은 하나, 화면의 5% 미만
  - display 서체와 body 서체를 짝지운다 (한 서체 = 템플릿)
  - 대칭 금지. 여백은 일부러 불균등하게

한글 폰트 주의: KoPub 은 굵기마다 패밀리 이름이 다르다.
bold 플래그를 쓰면 PowerPoint 가 가짜 볼드를 합성하므로, 굵기별 패밀리를 직접 지정한다.
"""
from pptx.dml.color import RGBColor


def _c(h):
    return RGBColor(int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


# ── 색 ─────────────────────────────────────────────────────────────────────
PAPER = _c("FBFAF6")   # 따뜻한 미색. 순백(FFFFFF) 금지
INK = _c("1C1A17")     # 따뜻한 먹. 순흑(000000) 금지
BODY = _c("34312B")
MUTED = _c("77726A")
FAINT = _c("9C968C")
RULE = _c("D5CFC2")    # 헤어라인
ACCENT = _c("A33B29")  # 단일 강조색(오배자 붉은빛). 아껴 쓴다
NEUTRAL = _c("A9A398")  # 데이터의 '기존 기준' 계열

# matplotlib 용 헥스
HEX = {
    "paper": "#FBFAF6", "ink": "#1C1A17", "body": "#34312B",
    "muted": "#77726A", "faint": "#9C968C", "rule": "#D5CFC2",
    "accent": "#A33B29", "neutral": "#A9A398",
}

# ── 서체 ───────────────────────────────────────────────────────────────────
# display: 출판용 명조. 굵기별 패밀리명이 다르므로 그대로 쓴다
DISPLAY = "KoPubBatang Bold"
DISPLAY_MED = "KoPubBatang Medium"
DISPLAY_LIGHT = "KoPubBatang Light"
# body: 산세리프
TEXT = "Pretendard"

FONT_FILES = {
    DISPLAY: "KoPub Batang Bold.ttf",
    DISPLAY_MED: "KoPub Batang Medium.ttf",
    DISPLAY_LIGHT: "KoPub Batang Light.ttf",
    TEXT: "Pretendard-Regular.otf",
}

# ── 활자 크기 ──────────────────────────────────────────────────────────────
# 읽는 문서다. 발표용 하한(20pt@10in)을 따르지 않고 편집 문서 크기를 쓴다.
# 대신 급간을 크게 벌린다 ― 촘촘한 단계는 AI 티의 원인이다.
NUMERAL = 108   # 슬라이드를 지배하는 숫자 하나
DISP = 38       # 슬라이드 제목
LEAD = 23       # 도입 문장
STAT = 30       # 통계 숫자
SUB = 15        # 소제목
TXT = 14.5      # 본문
LABEL = 11.5    # 라벨
FOLIO = 11      # 쪽번호·주석

# ── 판면 ───────────────────────────────────────────────────────────────────
W, H = 13.333, 7.5
ML, MR = 0.86, 0.72     # 좌우 여백을 다르게 ― 대칭 금지
MT, MB = 0.62, 0.52
CW = W - ML - MR
