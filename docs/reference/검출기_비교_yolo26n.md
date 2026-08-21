# YOLO26 전환 시도와 결과 — 최신 모델이 더 낫지 않았다

측정 2026-08-21 · 지시 "yolo 가장 최신모델로 돌리자"

**결론. `yolo26n` 은 `yolov8n` 보다 낫지 않았고, 곡선 적합도에서는 더 나빴다.
활성 곡선을 `yolov8n` 으로 되돌렸다.** 숨기지 않고 결과로 싣는다.

---

## 1. 학습 — 동률

같은 조건이다. SHWD train 5,457장 · 50 epoch · imgsz 640 · batch 16 · seed 0.

| 모델 | epoch | best mAP50 |
|---|---:|---:|
| yolov8n | 50 | **0.9372** |
| yolo26n | 50 | 0.9371 |

**차이가 0.0001 이다.** 탐지 성능만 보면 둘은 구별되지 않는다.

## 2. 곡선 적합 — yolo26n 이 미달

288조건을 각각 다시 측정하고 분리형 곱셈 모델을 피팅했다.

| | yolov8n | yolo26n |
|---|---:|---:|
| helmet_nohat (주 지표) R² | **0.8977** | 0.8572 |
| helmet_worn R² | **0.8308** | 0.7395 |
| 대표 R² (항목 최솟값) | **0.8308 통과** | **0.7395 미달** |

`config.R2_ACCEPTANCE = 0.80` 기준으로 **yolo26n 은 두 항목 모두에서 더 나쁘고,
helmet_worn 에서 게이트를 넘지 못한다.** CLAUDE.md §7 의 D+7 분기 조건에 걸린다.

`f(ρ)` 파라미터도 함께 옮겨 적는다.

| | L | k | x0 | λ (h) |
|---|---:|---:|---:|---:|
| yolov8n nohat | 0.9374 | 0.7385 | 5.731 | 4.201 |
| yolo26n nohat | 0.9229 | 0.7055 | 5.629 | 3.764 |

**형태는 같다.** 로지스틱 변곡점이 5.7 → 5.6px, 가림 감쇠가 4.20 → 3.76 으로
움직였을 뿐 부호도 순서도 바뀌지 않는다.

## 3. 그래서 무엇을 주장하는가

두 가지다.

**① 활성 곡선은 `yolov8n` 이다.** 게이트를 통과하는 쪽을 쓴다. 최신이라서 쓰는
것이 아니라 **맞는 쪽을 쓴다**.

**② 검출기를 바꿔도 관계의 형태는 유지된다.** 이것이 이 실험의 값어치다.
`CLAUDE.md` §9 는 이 도구를 *"절대 수치가 아니라 설치 조건에 따라 검출률이
변한다는 관계의 존재를 증명하는 실험"* 으로 규정했다. 서로 다른 두 검출기가
같은 형태의 곡선을 주고 파라미터만 조금 움직인다는 것은 그 규정을 뒷받침한다.
A-Eye 의 실제 모델로 교체해도 **곡선만 갈아 끼우면 된다**는 설계의 근거다.

## 4. 남은 산출물

| 파일 | 내용 |
|---|---|
| `outputs/grid_results.csv` | 활성 — yolov8n 288조건 |
| `outputs/grid_results_yolov8n.csv` | 사본 |
| `outputs/grid_results_yolo26n.csv` | yolo26n 288조건 |
| `outputs/curve_params.json` | 활성 — yolov8n |
| `outputs/curve_params_yolo26n.json` | yolo26n (status `acceptance_failed`) |
| `runs/detect/shwd_yolo26n/weights/best.pt` | 학습 가중치 |

## 5. 함께 고친 것 — 게이트가 작동하지 않았다

`fit_curve.py` 가 `acceptance_passed` 를 계산해 놓고 `status` 에는 `"ok"` 를
박아 넣고 있었다. 소비 측(`detect_model.load`)이 `status` 를 검사해도 늘
통과하므로 **미달 곡선이 조용히 파이프라인에 흘러들 수 있었다.** 실제로
yolo26n 곡선이 0.7395 로 미달인데 `status: ok` 로 적혔다.

이제 `status` 가 게이트를 반영한다(`"ok"` / `"acceptance_failed"`). 미달 곡선을
`detect_model.load()` 에 넣으면 즉시 `RuntimeError` 다. 확인했다.
`r2_primary` 도 함께 기록해 주 지표 단독 값을 볼 수 있게 했다.
