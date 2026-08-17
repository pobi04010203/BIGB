# tools — 발표자료 생성

`outputs/*.json` 의 **실행 결과를 읽어** 슬라이드를 만든다. 숫자를 스크립트에 적어두지 않으므로
실험을 다시 돌리면 슬라이드도 따라 갱신된다.

## 실행 순서

```
python tools/install_fonts.py     # 최초 1회 ― Pretendard 설치
python tools/make_figures.py      # 그림     -> outputs/figures/*.png
python tools/build_brief.py       # 슬라이드 -> outputs/주제설명_3장.pptx
python tools/render_deck.py       # 실제 렌더 -> outputs/주제설명_3장_전달용/ (PDF + PNG)
```

마지막 단계는 선택이 아니다. **눈으로 확인하지 않으면 잘린 슬라이드가 그대로 나간다.**

PowerPoint 로 pptx 를 열어둔 상태면 저장이 `PermissionError` 로 막힌다.
파일을 닫거나 `BRIEF_OUT=<경로> python tools/build_brief.py` 로 다른 이름에 쓴다.

## 산출물

| 파일 | 용도 |
|---|---|
| `outputs/주제설명_3장.pptx` | 편집용 |
| `outputs/주제설명_3장_전달용/*.pdf` | **배포용** ― 폰트가 박혀 어디서나 동일하다 |
| `outputs/주제설명_3장_전달용/*.png` | 200 dpi 슬라이드 이미지 |

## 의존

`python-pptx` · `matplotlib` · `pillow` · `fonttools` · `pymupdf`,
**LibreOffice** (`winget install TheDocumentFoundation.LibreOffice`),
**Pretendard** (`tools/install_fonts.py`). PowerPoint 는 없어도 된다.

---

# 함정 ― 겪고 나서 적은 것

### 1. python-pptx 의 `font.name` 은 한글에 적용되지 않는다 ⭐

OOXML 은 폰트 슬롯이 세 개다 ― `<a:latin>`(영문) · `<a:ea>`(동아시아) · `<a:cs>`.
`font.name` 은 **latin 만** 채운다. `ea` 가 비면 PowerPoint 는 한글을 테마 기본값
(맑은 고딕)으로 그린다.

**LibreOffice 는 latin 을 전체에 적용하므로 렌더 확인으로도 안 잡힌다.**
폰트를 바꿨다고 생각했는데 PowerPoint 에서는 그대로였던 적이 있다.

→ `build_brief.py` 의 `set_font()` 가 세 슬롯을 모두 채우고,
  `assert_font_slots()` 가 저장 직전 전 런을 검사해 빌드를 실패시킨다.

### 2. 한글 폰트는 글리프 구멍이 많다

맑은 고딕에 `−`(U+2212)가 없고, Hancom Gothic 에는 `—`(U+2014)·`–`(U+2013)·`−` 가
전부 없다. 없는 문자는 두부(빈 사각형)나 빈칸으로 나간다.

Pretendard 는 14,336자로 구멍이 없어 지금은 문제가 없지만, 폰트를 바꾸면 다시 터진다.
→ `fonts.assert_glyphs()` 가 저장 직전 폰트 cmap 과 대조해 빌드를 실패시킨다.

### 3. 폰트를 바꾸면 레이아웃이 깨진다

글자 폭이 달라진다. Hancom Gothic 으로 바꿨을 때 불릿 마지막 항목이 통째로 사라졌다.
폰트 교체 후에는 반드시 `render_deck.py` 로 다시 본다.

### 4. LibreOffice 행간이 PIL 근사보다 넓다

직접 만든 근사 렌더러로 "여유 있음" 이던 것이 실제로는 넘쳤다. 실제 렌더만 믿는다.

### 5. 그림은 슬라이드에 놓을 폭과 같은 `figsize` 로 그린다

13.5 in 로 그려 11 in 로 줄여 넣으면 차트 글씨가 본문의 60% 크기가 되어 읽히지 않는다.

### 6. 폰트 크기 규격은 캔버스 폭에 비례한다

"본문 20 pt 하한" 같은 기준은 10 in 캔버스 전제다. 13.333 in 16:9 에서는 ×1.333 해야
같은 크기로 보인다.

### 7. 배포는 PDF 로 한다

PPTX 는 상대 PC 에 Pretendard 가 없으면 폰트가 대체된다. PPTX 를 보내야 한다면
PowerPoint 에서 `파일 > 옵션 > 저장 > 파일에 글꼴 포함` 을 체크하고 저장한다.

### 8. Pretendard 배포 zip 은 두 종류다

`PretendardStd-*.zip` 은 **라틴 서브셋으로 한글이 0자다**. 전체판 `Pretendard-*.zip`(46 MB)
을 써야 한다. `install_fonts.py` 가 알아서 전체판을 고른다.

---

# 폰트를 왜 Pretendard 로 골랐나

후보를 실제로 렌더해 비교했다.

| 후보 | 판단 |
|---|---|
| 맑은 고딕 | 한글 자간이 벌어져 제목이 띄엄띄엄하다. `−` 누락 |
| Hancom Gothic | 자간은 정상. `—`·`–`·`−` 3종 누락 |
| 함초롬돋움 | 본문체 성격. 제목에서 자간이 느슨하다 |
| Noto Sans KR | 가변폰트 단일 파일이라 PowerPoint 가 볼드를 합성해 뭉갤 수 있다 |
| **Pretendard** | **자간이 고르고 숫자 조판이 가장 정돈된다. 글리프 누락 없음. Regular/Bold 별도 파일** |

이 자료는 수치가 주인공(`66.8% → 70.0%`, `334 → 168`)이라 숫자 조판 품질이 컸다.
바꾸려면 `tools/fonts.py` 의 `FAMILY` 와 `FILES` 만 고치면 된다.
