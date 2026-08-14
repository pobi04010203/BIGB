# PROGRESS — AI CCTV 배치 적정성 평가 모델

Phase 별 실행 결과 로그. **실제로 실행한 것만 적는다.**
계산하지 않은 값은 쓰지 않고 `미산출` 로 남긴다 (CLAUDE.md §0.1-1).

| Phase | 기간 | 상태 |
|---|---|---|
| 0 스캐폴딩 | D+0 | **완료** |
| 1 파이프라인 | D+1 ~ D+3 | 대기 — 별도 지시 후 시작 |
| 2 실험 | D+4 ~ D+7 | 대기 |
| 3 현장 모델 + 최적화 | D+8 ~ D+11 | 대기 |
| 4 목업 | D+12 ~ D+13 | 대기 |
| 5 예비 | D+14 | 대기 |

---

## Phase 0 — 스캐폴딩 (완료)

### 만든 것

```
├─ CLAUDE.md            (사용자 작성)
├─ PROGRESS.md          이 문서
├─ requirements.txt     ultralytics · opencv-python · numpy · scipy · pandas · matplotlib
├─ config.py            §4 격자 + §5.1 현장 + §5.2 기하 + ENABLE_OPTIMIZATION
├─ .gitignore           data/raw · data/filtered · *.pt 제외
├─ data/{raw,filtered}/
├─ notebooks/
├─ src/
├─ outputs/smoke_samples/
└─ mockup/
```

`src/` 는 비어 있다. 모듈 구현은 Phase 1 부터다.

### Acceptance — 통과

```
python -c "import ultralytics, cv2, numpy, scipy"   → PASS
```

실행일 2026-08-14. 설치된 버전:

| 패키지 | 버전 |
|---|---|
| ultralytics | 8.4.120 |
| opencv-python | 5.0.0 |
| numpy | 2.2.6 |
| scipy | 1.15.3 |
| pandas | 2.3.3 |
| matplotlib | 3.10.8 |
| torch | 2.7.1+cu118 |

`config.py` 로드 확인:

| 값 | 결과 |
|---|---|
| `FOCAL_PX` | 1920.00 — `(3840/2) / tan(45°)` |
| `N_CONDITIONS` | 125 |
| `rho_px(38.2)` | 12.57 px |
| `ENABLE_OPTIMIZATION` | True |

### 환경에서 확인된 것 — Phase 1 전에 판단 필요

1. **`torch` 가 CUDA 빌드(cu118)이고 `torch.cuda.is_available()` 이 True 다.**
   이 세션에서 설치한 것이 아니라 기존에 깔려 있던 것이다. CLAUDE.md §0.1-3 은
   로컬 CUDA **세팅**을 금지하므로 손대지 않았다. 추론은 `device='cpu'` 를
   명시하거나 Colab 을 쓰면 되고, 환경 조정에 시간을 쓰지 않는다.

2. **`opencv-python` 이 4.13.0 → 5.0.0 으로 올라갔다.** `ultralytics` 설치 과정의
   의존성 해결 결과다. 쓰는 API 는 `resize` · `warpPerspective` · `rectangle`
   정도라 영향이 없을 것으로 보이나, Phase 1 스모크 테스트에서 실제로 확인한다.

3. **CLAUDE.md §5.2 의 출력 예시가 자체 공식과 맞지 않는다.**
   예시는 `d_m: 38.2, rho_px: 27.4` 인데, 같은 절의 공식
   `ρ = f_px · H_head / d` 에 4K·HFOV 90°·H_head 0.25m 를 넣으면 **12.57** 이다.
   27.4 가 나오려면 `f_px ≈ 4187` (HFOV 약 49°) 이어야 한다.
   예시 JSON 은 형식을 보이려는 것으로 보고 **공식을 정본으로 삼았다.**
   검산 기준값으로 27.4 를 쓰지 말 것. 의도가 다르면 알려주면 고친다.

### 남은 사용자 작업 — SHWD 내려받기

`data/raw/` 가 비어 있다. Phase 1 의 데이터 필터링이 여기서 막힌다.

- 데이터셋: **SHWD** (Safety Helmet Wearing Dataset), 라벨 `hat` / `person`
- 배포처: GitHub `njvisionpower/Safety-Helmet-Wearing-Dataset`
- 실제 파일은 저장소 README 가 가리키는 Google Drive / Baidu 링크에 있다.
  직접 링크는 바뀌므로 README 를 열어 확인할 것
- 받은 뒤 `data/raw/` 아래에 이미지와 어노테이션을 그대로 풀어 둔다
- `data/raw/` 는 `.gitignore` 되어 있어 커밋되지 않는다

용량이 크면 Colab 으로 옮겨 Phase 2 를 돌리는 편이 낫다.

---

## Phase 1 — 파이프라인 (대기)

CLAUDE.md §10 이 *"Phase 1 은 별도 지시 후 시작한다"* 로 못박아 두어 멈춰 있다.

시작하면 할 일:

1. `src/transforms.py` — ρ/θ/o 3축 변형
2. 데이터 필터링 (머리 bbox ≥ 40px, 목표 500장)
3. 스모크 테스트 9조건 — ρ ∈ {48,24,12} × θ=0 × o ∈ {0,30,60}

**Acceptance:** 9조건이 단조 감소 경향을 보일 것. 아니면 전체 격자로 넘어가지 않고
변형 구현을 디버깅한다. 변형 결과 이미지 3장을 `outputs/smoke_samples/` 에 남긴다.
