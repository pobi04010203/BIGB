# PROGRESS — AI CCTV 배치 적정성 평가 모델

Phase 별 실행 결과 로그. **실제로 실행한 것만 적는다.**
계산하지 않은 값은 쓰지 않고 `미산출` 로 남긴다 (CLAUDE.md §0.1-1).

| Phase | 기간 | 상태 |
|---|---|---|
| 0 스캐폴딩 | D+0 | **완료** |
| 1 파이프라인 | D+1 ~ D+3 | **부분 완료** — ① 끝, ②③ 데이터 대기 |
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

## Phase 1 — 파이프라인 (부분 완료)

| # | 항목 | 상태 |
|---|---|---|
| 1 | `src/transforms.py` — ρ/θ/o 3축 변형 | **완료** |
| 2 | 데이터 필터링 (머리 bbox ≥ 40px, 목표 500장) | **막힘 — 데이터셋 없음** |
| 3 | 스모크 테스트 9조건 | **막힘 — 어노테이션 없음** |

### ① transforms.py — 완료

변형 순서는 `rho → theta → occlusion` 이다. 가림은 카메라와 피사체 사이의 전경
부재를 모사하므로 마지막에 얹는다. 앞에 두면 다운샘플·워핑에 스트라이프가 뭉개져
목표 가림률이 흐트러진다.

`apply_condition()` 은 실제로 적용된 값을 함께 돌려준다. 정수 픽셀로 떨어뜨리느라
목표와 어긋나므로 결과 CSV 에는 목표값이 아니라 **실측값**을 기록한다.

**동작 확인** (`data/raw/image/3.jpg`, 440×293). 데모 이미지에는 어노테이션이 없어
원본 머리 크기를 `48px` 로 **가정**했다 — 측정값이 아니다.

ρ — 선명도가 단조 감소한다:

| ρ (px) | 48 | 32 | 24 | 16 | 12 |
|---|---:|---:|---:|---:|---:|
| Laplacian var | 2814.7 | 294.5 | 150.7 | 59.1 | 27.7 |

가림률 — 목표 대비 실측:

| 목표 | 0% | 15% | 30% | 45% | 60% |
|---|---:|---:|---:|---:|---:|
| 실측 | 0.00% | 17.05% | 28.41% | 45.45% | 61.82% |

440px 폭에서 스트라이프 주기가 18px 라 양자화 오차가 최대 2.05%p 다. 실제 격자는
더 큰 이미지를 쓰므로 줄어들며, 어느 쪽이든 실측값을 기록하므로 오차가 지표에
섞이지 않는다.

θ — `theta=0` 은 원본과 바이트 단위로 동일(항등). 각도가 커질수록 내용 점유가
95.4% → 81.0% → 60.7% → 37.7% 로 단조 감소한다.

`outputs/smoke_samples/` 에 3장 저장: `rho48_theta0_occ0` · `rho24_theta30_occ30` ·
`rho12_theta60_occ60`. 육안 확인 결과 흐림·사다리꼴 원근·수직 스트라이프가 모두
의도대로 걸린다.

### ②③ 막힘 — SHWD 데이터셋이 없다

사용자가 넣은 `Safety-Helmet-Wearing-Dataset-master.zip` (3.6MB) 은 **GitHub 저장소
소스**였다. 풀어보니 데모 이미지 21장(원본 10 + 결과 오버레이 10 + demo1)과 학습
스크립트 3개뿐이고 **어노테이션은 0개**다.

| 필요한 것 | 있는 것 |
|---|---|
| 이미지 7,581장 | 21장 (데모) |
| VOC 어노테이션 (`hat` / `person`) | **0개** |
| `VOC2028/{Annotations,ImageSets,JPEGImages}` | 없음 |

어노테이션이 없으면 `recall_hat` · `recall_nohat` 을 계산할 수 없다. 주 지표가
`recall_nohat` (§4.4) 이므로 스모크 테스트의 Acceptance(단조 감소 확인)도 성립하지
않는다. **추정으로 대신하지 않는다** (§0.1-1).

원본 zip 은 사용자 승인 하에 삭제했다.

#### 받아야 할 것

저장소 README 가 가리키는 실제 배포처다.

- GoogleDrive — `https://drive.google.com/open?id=1qWm7rrwvjAWs1slymbrLaCf7Q-wnGLEX`
- BaiduDrive — `https://pan.baidu.com/s/1UbFkGm4EppdAU660Vu7SdQ`

받으면 `data/raw/VOC2028/` 아래에 `Annotations/` `ImageSets/` `JPEGImages/` 가
그대로 오도록 풀면 된다. `data/raw/` 는 gitignore 되어 커밋되지 않는다.

도착하면 ②③ 을 이어서 돌린다. `transforms.py` 는 이미 준비돼 있어 필터링과
스모크 테스트만 남는다.
