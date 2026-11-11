# 솔포스 IR 시안 B — 아이소 블록 - Design Spec

> Machine-readable execution contract: `spec_lock.md`. On divergence, `spec_lock.md` wins.

## I. Project Information

| Item | Value |
| ---- | ----- |
| **Project Name** | 솔포스 IR 시안 B — 아이소 블록 |
| **Canvas Format** | PPT 16:9 (1280×720) |
| **Page Count** | 7 (source slides 1, 2, 5, 6, 12, 21, 23) |
| **Design Style** | briefing × custom |
| **Target Audience** | 투자자·심사위원 (IR 발표 + 배포) |
| **Use Case** | IR deck design draft for 솔포스 / DeepSpec |
| **Delivery Purpose** | `balanced` — body 24px |
| **Content Strategy** | 원문 그대로 (verbatim): no rewording, no additions; layout only |
| **Created Date** | 2026-11-11 |

> Note: User notes applied — white-based, brand navy from the logo, faces over lines, consistent outline margins, flashy, AI/semiconductor color feel (glow tier added). Requires Pretendard installed on the presenting PC.

---

## II. Canvas Specification

| Property | Value |
| -------- | ----- |
| **Format** | PPT 16:9 |
| **Dimensions** | 1280×720 |
| **viewBox** | `0 0 1280 720` |
| **Margins** | left/right 60px, top 40px, bottom 36px |
| **Content Area** | x 60–1220, y 40–684 (footer row y 684–708) |

---

## III. Visual Theme

### Theme Style

- **Mode**: briefing
- **Visual style**: custom — Bold color-block composition on a white field: one large flat brand-primary plane per page whose position changes page to page (left pillar, bottom band, split half, top band) so no two consecutive pages share the same framing; isometric stacked-chip cubes (three flat faces per cube, top face lightest) as the recurring motif; near-square corners (4px); no strokes or hairlines anywhere — separation by fills and white gaps; large heavy numerals; dense content sits on pale tint planes.
- **Theme**: Light theme
- **Tone**: 묵직하고 단단한 기업형, 큰 남색 면과 입체 칩 큐브

### Color Scheme

| Role | HEX | Purpose |
| ---- | --- | ------- |
| **Background** | `#FFFFFF` | Page background |
| **Secondary bg** | `#F1F3FA` | Cards, tinted planes |
| **Primary** | `#1E2188` | Logo navy — titles, large planes |
| **Accent** | `#2D5BFF` | Labels, key highlights, gradients |
| **Secondary accent** | `#F1CE36` | Gradient end, secondary emphasis |
| **Glow** | `#5CD0FF` | AI/semiconductor light accents, glows |
| **Highlight** | `#F1CE36` | DeepSpec yellow — single hero numbers only |
| **Body text** | `#12152E` | Body text |
| **Secondary text** | `#5B6178` | Captions, sources |
| **Border/divider** | `#DDE3F5` | Tint planes only (no lines) |
| **On-dark text** | `#FFFFFF` | Text on primary planes |

> Note: Gradients run primary → accent → secondary accent / glow; no gradient touches text.

---

## IV. Typography System

### Font Plan

**Typography direction**: Pretendard single family (install-local lock), weight contrast ExtraBold title / Regular body.

| Role | Chinese | English | Fallback tail |
| ---- | ------- | ------- | ------------- |
| **Title** | Pretendard | Pretendard | "Malgun Gothic", sans-serif |
| **Body** | Pretendard | Pretendard | "Malgun Gothic", sans-serif |

- Title: `Pretendard, "Malgun Gothic", sans-serif`
- Body: `Pretendard, "Malgun Gothic", sans-serif`
- Emphasis: same as Body
- Code: `Consolas, "Courier New", monospace`

### Font Size Hierarchy

**Baseline**: Body = 24

| Purpose | Size | Weight |
| ------- | ---- | ------ |
| Cover title | 60 | ExtraBold |
| Page title | 40 | Bold |
| Hero number | 48 | ExtraBold |
| Lead (core message) | 26 | Bold |
| Subheading | 26 | Bold |
| Body | 24 | Regular |
| Table text | 20 | Regular |
| Annotation | 18 | Regular |
| Footnote / source | 16 | Regular |

---

## V. Layout Principles

### Page Structure

- **Header area**: y 40–206 — section label (18), page title (40), core-message band (26 lead on a filled face)
- **Content area**: y 226–664
- **Footer area**: y 676–708 — source line (16) left, logo + page number right

### Spacing Specification

| Element | Current Project |
| ------- | --------------- |
| Safe margin | 60px left/right |
| Content block gap | 24px |
| Card gap | 24px |
| Card padding | 20px |
| Card border radius | 4px (near-square) |

> Note: No strokes or hairlines; separation by filled faces and white gaps. Cover: B: white left with large navy headline; right a full-height gradient navy block carrying an isometric chip-cube stack; cover illustration on a white card. Closing: split page: left full-height navy block with the investment terms, right white column of goal rows.

---

## VI. Icon Usage Specification

- **Library**: `chunk-filled` (single library)

| Purpose | Icon Path | Page |
| ------- | --------- | ---- |
| step/goal accent | `chunk-filled/arrow-down-to-line` | P04 / P05 / P07 |
| step/goal accent | `chunk-filled/gauge-high` | P04 / P05 / P07 |
| step/goal accent | `chunk-filled/badge-check` | P04 / P05 / P07 |
| step/goal accent | `chunk-filled/file` | P04 / P05 / P07 |
| step/goal accent | `chunk-filled/robot` | P04 / P05 / P07 |
| step/goal accent | `chunk-filled/chart-line` | P04 / P05 / P07 |
| step/goal accent | `chunk-filled/rocket` | P04 / P05 / P07 |

---

## VII. Visualization Reference List

Catalog read: 76 templates

| Page | Template | Path | Summary-quote (verbatim from `charts_index.json`) | Usage |
| ---- | -------- | ---- | ------------------------------------------------- | ----- |
| P02 | kpi_cards | `templates/charts/kpi_cards.svg` | "Pick for 4-8 standalone numeric metrics shown as overview cards (2x2 or 1x4) — exec summary opener, dashboard headline, quarterly recap, results-at-a-glance. Skip if metrics have target baselines (use bullet_chart) or single hero number (use gauge_chart)." | 1x4 cards; each card also carries its news thumbnail and source |
| P03 | concentric_circles | `templates/charts/concentric_circles.svg` | "Pick for 3-5 priority rings from core to periphery — bullseye/onion model, sphere of influence, stakeholder rings, core-to-ecosystem priority layers, target-vs-extended audience. Skip for non-prioritized layers (use pyramid_chart)." | TAM / SAM / SOM nested rings beside the market table |
| P03 | basic_table | `templates/charts/basic_table.svg` | "Pick for plain tabular text/number grid, 3-8 columns. Skip if cells need visual bars (use consulting_table) or qualitative scores (use harvey_balls_table)." | 4-column market table, fill-separated rows |
| P04 | numbered_steps | `templates/charts/numbered_steps.svg` | "Pick for 3-6 horizontal sequential steps with numeric emphasis — how-it-works section, getting-started guide, methodology overview, implementation phases. Skip if steps need connector arrows (use process_flow) or named output artifacts (use pipeline_with_stages)." | 4 steps stacked beside the screenshot |
| P05 | no-template-match | — | — | evidence image strip + two text panels; custom layout |
| P06 | financial_statement_table | `templates/charts/financial_statement_table.svg` | "Pick for income statement / balance sheet style with right-aligned numbers and strong total rows. Skip for non-financial tabular data (use basic_table)." | revenue plan table with strong 합계 row + 3 KPI faces |
| P07 | vertical_list | `templates/charts/vertical_list.svg` | "Pick for 3-6 numbered key points each with a short description — design principles, core tenets, action items, key takeaways, recommendations, executive summary points. Skip for icon-style cards (use icon_grid) or sequential steps (use numbered_steps)." | 24개월 목표 4 rows (metric + description) |

Runners-up considered:
- process_flow | rejected for P04: steps sit beside a large screenshot, arrows would cut the narrow column
- column_chart | rejected for P06: a chart of totals would add a visual not in the source; table kept verbatim

---

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Layout pattern | Acquire Via | Status | Reference | text_policy | page_role |
| -------- | --------- | ----- | ------- | ---- | -------------- | ----------- | ------ | --------- | ----------- | --------- |
| sp_navy.png | 523×304 | 1.72 | SolPos logo on light pages | Logo | footer / cover mark | user | Existing | transparent version of source logo | embedded | local |
| sp_white.png | 523×304 | 1.72 | SolPos logo on dark planes | Logo | cover mark | user | Existing | white version of source logo | embedded | local |
| ds_logo.png | 813×477 | 1.70 | DeepSpec logo | Logo | cover product card | user | Existing | source logo, white keyed out | embedded | local |
| image-1-2.png | 602×588 | 1.02 | Cover illustration | Illustration | cover product card | user | Existing | source cover image | none | hero_page |
| image-2-2.jpg … image-2-5.jpg | 1280×720 | 1.78 | News thumbnails P02 | Photo | card media | user | Existing | source video thumbnails | embedded | local |
| image-6-2.png | 1201×979 | 1.23 | Platform screenshot P04 | Screenshot | framed device panel | user | Existing | deepspec.kr screen | embedded | local |
| image-12-2.png / image-12-3.png / image-12-4.png / image-12-5.png | 739×691 / 661×606 / 337×337 / 1420×531 | 1.07 / 1.09 / 1.00 / 2.67 | P05 evidence images | Screenshot | evidence strip | user | Existing | source slide 12 images | embedded | local |

---

## IX. Content Outline

> Content strategy: verbatim. Every string below is copied from the source deck (`sources/solpos_ir_source.md`, source slides 1, 2, 5, 6, 12, 21, 23). No wording is added, removed, or reworded; only layout changes. Line breaks inside a string are layout only.

### Part 1: Opening

#### Slide 01 - Cover  (source slide 1)

- **Cover impact**: hook = the product promise "컴퓨터·AI 반도체 성능 인증과 평생관리 에이전트, 딥스펙" as a large typographic headline; composition = typographic poster beside a native-SVG semiconductor visual (set-specific: glass rings / isometric chip cubes / glowing die), with the source cover illustration and DeepSpec logo as a product card.
- **Layout**: headline left two-thirds, visual right; process chips under the headline.
- **Eyebrow**: 구간 가속 진단 기술이 적용된
- **Title**: 컴퓨터·AI 반도체 성능 인증과 / 평생관리 에이전트, 딥스펙
- **Process**: 측정 → 6등급 판정 → 시험성적서 → 평생관리
- **Sub**: DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼
- **Info**: 솔포스 주식회사 | 대표이사 김창선 | www.deepspec.kr
- **Top right**: IR DECK | 2026. 11
- **Images**: sp logo, cover illustration (image-1-2), DeepSpec logo

### Part 2: Problem

#### Slide 02 - 문제 정의 · 현실  (source slide 2)

- **Label**: 1. 문제 정의 · 현실
- **Title**: 거래 사기 · 부품 털이 · AI 명령 거부, 하드웨어를 믿을 근거 부재
- **Core message**: 사진과 말만 믿고 사는 중고 IT, 통제 밖에서 움직이는 AI, 멈추고 나서야 아는 서버
- **Visualization**: kpi_cards (4 columns, each = news thumbnail + headline + source + category + stat)
- **Content** (4 columns, in order):
  - 중고거래로 맥북 샀는데 / KBS 자막뉴스 · 2024.03.13 / youtube.com/watch?v=aCLYk93TMWw / 중고 거래 사기 / 2.3배 / 동일 사양 중고 노트북 매입처별 사정가 편차
  - 램값이 금값, 중고 거래에 PC 털이까지 / SBS 뉴스 · 2026 / youtube.com/watch?v=QW3PfvUsnM0 / 부품 빼돌리기 / 40~50만 대 / 연간 중고 노트북 유통 성능 기준 가격 없음
  - AI, 명령 거부 + 코드 조작까지 / YTN · 2025.05 / youtube.com/watch?v=NsTJt3sEoW8 / AI 통제 이탈 / 2025.05 / AI의 종료 지시 거부 첫 사례 보고(YTN 보도)
  - 정부 시스템 647개 중단 / SBS 8뉴스 · 2025.09.27 / youtube.com/watch?v=cpbq9fR_4Bw / 전산 인프라 마비 / 647개 / 2025.09 화재로 중단된 정부 업무 시스템(SBS 보도)
- **Source**: 출처: KBS News·SBS 뉴스·YTN 유튜브(각 영상 제목·화면 인용), 당사 시장 조사(2026.08)
- **Images**: image-2-2.jpg … image-2-5.jpg (thumbnails, no-crop)

### Part 3: Market

#### Slide 03 - 시장규모  (source slide 5)

- **Label**: 2. 시장규모 · TAM-SAM-SOM
- **Title**: IT 하드웨어 성능 검증·인증 시장, 2031년 약 1.2조 원
- **Core message**: 목표: 2031년 SOM 시장에서 점유율 약 1%, 매출 127억 원
- **Visualization**: concentric_circles (TAM $71.8B ('31) / SAM $19.4B ('31) / SOM 약 1.2조 원) + basic_table
- **Table** (구분 | 시장 | 규모 | 성장률):
  - TAM | 글로벌 IT 자산관리 및 운영 SW | $40.67B('26) → $71.82B('31) | CAGR 12.05%
  - SAM | 글로벌 IT 인프라 모니터링 SW | $13.72B('26) → $19.42B('31) | CAGR 7.2%
  - SOM | 글로벌 IT HW 성능 검증·인증 SW | 약 8,400억 원('26) → 약 1조 1,892억 원('31) | 당사 추정
  - 국내 | 중고 노트북 시장 중 인증 요구분 15% | 약 3,000억 원('31) 중 450억 원 | 당사 추정
- **Block**: 시장 진입 경로 — 중고 IT 거래 → IT 자산관리 → 공공조달·렌탈·보험 검수 → 피지컬 AI 진단 (6개 영업부문)
- **Source**: 출처: Gartner, Market Share: IT Operations Management Software, Worldwide, 2024 · Persistence Market Research, IT Infrastructure Monitoring Market, 2025–2032 · 당사 추정(2026.08)

### Part 4: Solution & Technology

#### Slide 04 - 솔루션 · 서비스 구조  (source slide 6)

- **Label**: 3. 솔루션 · 서비스 구조
- **Title**: PC에 설치해 측정하고, 웹에서 시험성적서 발급
- **Core message**: 설치파일 하나로 측정 · 추가 장비 불필요 · 결과는 6등급과 QR 인증 성적서로 제공
- **Visualization**: numbered_steps (4 steps) beside the platform screenshot
- **Steps**:
  - 01 에이전트 설치 — DeepSpec 에이전트(.msi) 다운로드, 로그인하면 기기 자동 등록
  - 02 가속 부하 측정 — 사용률 60 → 80 → 100% 구간별로 부하를 올리며 속도·온도·연산량 수집
  - 03 6등급 판정 — 24개 품질 지표를 A+ ~ C 6단계 등급으로 환산
  - 04 시험성적서 발급 — 웹에서 PDF 성적서 발급, QR로 진위 확인
- **Block**: 활용처 — 중고 거래 가격 기준 · 기업 IT 자산 실사 · 렌탈 반납 검수 · 보험·보증 심사 자료
- **Source**: 출처: deepspec.kr 화면(2026.11)
- **Images**: image-6-2.png (screenshot, no-crop)

#### Slide 05 - 기술 · 피지컬 AI 확장  (source slide 12)

- **Label**: 4. 기술 · 피지컬 AI 확장
- **Title**: 동일 엔진으로 로봇 연산장치(ARM)까지 진단
- **Core message**: NVIDIA Jetson Orin NX·Raspberry Pi 실측 완료 · x86에서 ARM 기반 피지컬 AI 장비로 적용 범위 확대
- **Visualization**: no-template-match (evidence image strip + two text panels)
- **Images with captions**: image-12-2 "Jetson Orin NX 코어별 부하 시험" · image-12-3 "응답 CSV 모니터링(Raspberry Pi)" · image-12-4 "TurtleBot3 실증 장비" · image-12-5 "바이탈 미터: 온도·전력·GPU·CPU 사용률 실시간 표시"
- **Panel**: AI 진단 엔진(계획) — 다중 데이터: CPU·GPU·전력·온도 / LSTM 오토인코더 + 데이터 융합 / LIME 기반 특성 기여도 분석 / 이상 분석 시각화 UI
- **Panel**: 3개년 확장 — 가동 패턴 검증, 안전 신뢰도 측정·경고 / 로봇 연산력 정규화, 코어 슬립 제어·재배치 / 3D 단층면 이상 추적, 비상대응망
- **Source**: 출처: 당사 「피지컬 AI 암코어」 기술 자료(2026.02) · 딥러닝 진단 엔진은 개발 계획

### Part 5: Finance & Investment

#### Slide 06 - 재무 계획 · 매출 추정  (source slide 21)

- **Label**: 9. 재무 계획 · 매출 추정
- **Title**: 6개 영업부문, 2031년 매출 127억 원 목표
- **Core message**: 투자 후 12개월 5.0억 원(유통 비중 80%) → 2027년 9.4억 원(유통 33%, 진단·플랫폼·구독 중심)
- **Visualization**: financial_statement_table
- **Table** (영업부문 | 2027 | 2028 | 2029 | 2030 | 2031 | 5개년): IT 자산관리 2.0 4.0 7.0 18.0 24 55 / 공공조달 검수 0.9 1.5 2.1 4.5 6 15 / 중고 IT 거래 3.0 12.0 22.0 45.0 68 150 / 렌탈·리스 검수 0.5 1.0 1.5 3.0 4 10 / 피지컬 AI 진단 2.0 4.0 7.0 13.0 19 45 / 보험·보증 진단 1.0 1.0 2.0 5.0 6 15 / 합계 9.4 23.5 41.6 88.5 127 290
- **KPI strip**: 투자 후 12개월 5.0억 원 — 특판 유통 4.0 · 진단솔루션 SI 0.8 · 진단료 0.2 / 2027년 9.4억 원 — 거래·유통 3.0 · 진단·플랫폼·구독 6.4 / 2031년 127억 원 — 거래·유통 68 · 진단·플랫폼·구독 59
- **Source**: 출처: 당사 사업계획(2026.08) · 단위: 억 원 · 직전년도(2026) 실적과 비용 추정은 결산 자료 수령 후 반영 필요

#### Slide 07 - 투자 제안 · 라운드 개요  (source slide 23)

- **Closing impact**: the ask — "Seed 3억 원(TIPS 연계 포함 총 10억 원) 투자 유치" — with 3억 원 as the dominant figure and the 24-month goals as the payoff column.
- **Label**: 10. 투자 제안 · 라운드 개요
- **Title**: Seed 3억 원(TIPS 연계 포함 총 10억 원) 투자 유치
- **Core message**: 24개월 내 전국 3개 거점 · 입점 파트너 30개사 · 2028년 매출 약 24억 원
- **Visualization**: vertical_list (24개월 목표) + condition rows
- **투자 조건**: 라운드 Seed / 투자 유치 금액 3억 원 / TIPS 연계 포함 총 10억 원 / 밸류에이션 협의(IP 가치평가 24.18억 원 참고) / 정부 매칭 강원권 LIPS 별도 병행
- **주주 구성**: 대표이사 김창선 및 경영진 중심(지분율·기존 투자사는 기업 확인 후 기재)
- **24개월 목표**: 매출 33억 원 — 향후 2개년 누적(중고·신품 IT 기기 거래, 피지컬 AI 진단 수수료) / 월 5,000건 — 전국 다자간 안심거래 플랫폼 확대, 파트너사 5개사 이상 정식 계약 / 베타 출시 — 피지컬 AI 3D 이상 추적·비상대응망 / Pre-A 20억 원 — 상용화 실적 기반 후속 투자 유치
- **Source**: 출처: 당사 제안 기준(도전의 IR 발표 자료, 2026.11) · 밸류에이션·투자 조건은 협의, 주주 구성은 기업 확인 필요

---

## X. Speaker Notes Requirements

None requested
