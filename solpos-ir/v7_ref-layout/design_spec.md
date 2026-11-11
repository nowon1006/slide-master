# 솔포스 IR 시안 D — 화이트 + 블루 포인트 - Design Spec

> Machine-readable execution contract: `spec_lock.md`. On divergence, `spec_lock.md` wins.

## I. Project Information

| Item | Value |
| ---- | ----- |
| **Project Name** | 솔포스 IR 시안 D — 화이트 + 블루 포인트 |
| **Canvas Format** | PPT 16:9 (1280×720) |
| **Page Count** | 5 (source slides 1, 2, 5, 15, 23) |
| **Design Style** | briefing × glassmorphism (light field) |
| **Target Audience** | 투자자·심사위원 (IR 발표 + 배포) |
| **Use Case** | IR deck design draft for 솔포스 / DeepSpec |
| **Delivery Purpose** | `balanced` — body 24px |
| **Content Strategy** | 원문 그대로 (verbatim): no rewording, no additions; layout only |
| **Created Date** | 2026-11-11 |

> Note: User direction (2026-11-11) — references are light-based with blue as point color; keep blue to keywords, numbers and accent faces; use Venn-type diagrams for readability; more flashy; gradient effects. Requires Pretendard on the presenting PC.

---

## II. Canvas Specification

| Property | Value |
| -------- | ----- |
| **Format** | PPT 16:9 |
| **Dimensions** | 1280×720 |
| **viewBox** | `0 0 1280 720` |
| **Margins** | left/right 60px, top 40px, bottom 36px |
| **Content Area** | x 60–1220, y 40–684 |

---

## III. Visual Theme

### Theme Style

- **Mode**: briefing
- **Visual style**: glassmorphism (light field)
- **Theme**: Light theme — about 80% white / pale-blue surfaces, blue only as point color
- **Tone**: 밝고 깨끗한 테크, 파란 포인트와 유리 질감 그라데이션

### Color Scheme

| Role | HEX | Purpose |
| ---- | --- | ------- |
| **Background** | `#FFFFFF` | Simple pages |
| **Secondary bg** | `#E9ECF1` | Busy pages' background (white cards on top) |
| **Primary** | `#003597` | Logo navy — gradient depth only |
| **Accent** | `#0062DF` | Point color — keywords, numbers, one focal face |
| **Secondary accent** | `#9DB8FF` | Transparent gradient light |
| **Body text** | `#1A2434` | Titles and body |
| **Secondary text** | `#565D6A` | Captions, sources |
| **Border/divider** | `#D6D8DB` | Neutral faces |

> Note: User revision 2 — blue family limited to three values and used as point only; transparent blue gradients for an AI-semiconductor feel.

---

## IV. Typography System

**Typography direction**: Pretendard single family (install-local lock).

- Title: `Pretendard, "Malgun Gothic", sans-serif`
- Body: `Pretendard, "Malgun Gothic", sans-serif`

| Purpose | Size | Weight |
| ------- | ---- | ------ |
| Titles, cover title, hero numbers | 40 | Bold |
| Body, core message, labels | 22 | Regular / Bold |
| Captions, sources, table detail | 16 | Regular / Bold |

> Note: User revision 2 — three sizes and two weights only; generous whitespace (80px side margins); align every block to the 80px outline.

---

## V. Layout Principles

- Header: section label (18, accent) + page number at top; title 40 navy with keyword run in accent; core message on a pale tint face with a small gradient marker.
- Content y 220–664; footer y 684–708.
- No lines; faces + white gaps; one or two glass orbs per page as decoration.

---

## VI. Icon Usage Specification

- **Library**: `phosphor-duotone`

| Purpose | Icon Path | Page |
| ------- | --------- | ---- |
| differentiator | `phosphor-duotone/gauge` | P04 |
| differentiator | `phosphor-duotone/certificate` | P04 |
| differentiator | `phosphor-duotone/database` | P04 |
| goals | `phosphor-duotone/chart-line-up` | P05 |
| point | `phosphor-duotone/seal-check` | P04 |

---

## VII. Visualization Reference List

Catalog read: 76 templates

| Page | Template | Path | Summary-quote (verbatim from `charts_index.json`) | Usage |
| ---- | -------- | ---- | ------------------------------------------------- | ----- |
| P02 | kpi_cards | `templates/charts/kpi_cards.svg` | "Pick for 4-8 standalone numeric metrics shown as overview cards (2x2 or 1x4) — exec summary opener, dashboard headline, quarterly recap, results-at-a-glance. Skip if metrics have target baselines (use bullet_chart) or single hero number (use gauge_chart)." | 4 news cards with stat |
| P03 | concentric_circles | `templates/charts/concentric_circles.svg` | "Pick for 3-5 priority rings from core to periphery — bullseye/onion model, sphere of influence, stakeholder rings, core-to-ecosystem priority layers, target-vs-extended audience. Skip for non-prioritized layers (use pyramid_chart)." | TAM/SAM/SOM gradient rings + table |
| P04 | venn_diagram | `templates/charts/venn_diagram.svg` | "Pick for 2-3 overlapping sets where the intersection is the message. Skip if no overlap exists (use icon_grid)." | 3 differentiators as overlapping circles, DeepSpec logo at the intersection; success-case table |
| P05 | vertical_list | `templates/charts/vertical_list.svg` | "Pick for 3-6 numbered key points each with a short description — design principles, core tenets, action items, key takeaways, recommendations, executive summary points. Skip for icon-style cards (use icon_grid) or sequential steps (use numbered_steps)." | 24-month goals |

Runners-up considered:
- icon_grid | rejected for P04: the user asked for a Venn-type tool; the three differentiators combine into one product, which the overlap expresses

---

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Layout pattern | Acquire Via | Status | Reference | text_policy | page_role |
| -------- | --------- | ----- | ------- | ---- | -------------- | ----------- | ------ | --------- | ----------- | --------- |
| sp_navy.png / sp_white.png | 523×304 | 1.72 | SolPos logo | Logo | footer / cover | user | Existing | source logo | embedded | local |
| ds_logo.png | 813×477 | 1.70 | DeepSpec logo | Logo | cover card, Venn center | user | Existing | source logo | embedded | local |
| image-1-2.png | 602×588 | 1.02 | Cover illustration | Illustration | cover card | user | Existing | source cover | none | hero_page |
| image-2-2.jpg … image-2-5.jpg | 1280×720 | 1.78 | News thumbnails | Photo | card media | user | Existing | source thumbnails | embedded | local |

---

## IX. Content Outline

> Verbatim from `sources/solpos_ir_source.md` slides 1, 2, 5, 15, 23.

#### Slide 01 - Cover (source 1)
- **Cover impact**: typographic headline on a light field with a blue gradient glass wave and orbs at right; product card with the cover illustration.
- Same strings as source slide 1.

#### Slide 02 - 1. 문제 정의 · 현실 (source 2)
- **Core message**: 사진과 말만 믿고 사는 중고 IT, 통제 밖에서 움직이는 AI, 멈추고 나서야 아는 서버
- **Visualization**: kpi_cards — four cards (thumbnail, headline, source, category, stat, note) verbatim.

#### Slide 03 - 2. 시장규모 · TAM-SAM-SOM (source 5)
- **Core message**: 목표: 2031년 SOM 시장에서 점유율 약 1%, 매출 127억 원
- **Visualization**: concentric_circles + table verbatim; 시장 진입 경로 chips.

#### Slide 04 - 5. 경쟁 환경 · 성공사례와 차별점 (source 15)
- **Title**: 중고 IT 검증·진단 분야, 글로벌 대형 투자·인수 사례
- **Core message**: 거래 시장이 커질수록 검증 수요 동반 성장 · 검증 기준을 가진 기업이 시장 주도
- **Visualization**: venn_diagram — 3가지 핵심 차별점: 01 가동 중 가속 검증 (4단계 부하 가속으로 24개 지표 실측. 설치파일 하나로 측정, 별도 장비 불필요) / 02 등급과 성적서 (6등급 + QR 인증 시험성적서 자동 발급. 중고 거래·자산 실사·보험 심사의 공통 기준으로 사용) / 03 특허와 평생 이력 데이터 (등록 2건·출원 4건, IP 가치 24.18억 원. 에이전트로 쌓이는 기기별 이력이 AI 진단 학습 자산)
- **Table**: 글로벌 성공사례 — 기업 | 내용 | 성과: Back Market (프랑스) | 리퍼 전자기기 마켓플레이스 / 등급 검수 기반 거래, 고객 600만 명 | 2022 시리즈E / 5.1억 달러 유치 / 기업가치 57억 달러; Blancco (영국) | IT 기기 데이터 삭제·진단 SW / ITAD·리퍼 업체 대상 | 2023 Francisco / Partners 인수 / 약 1.75억 파운드
- **Callout**: 국내에는 PC·서버 성능을 등급으로 인증하는 사업자 부재
- **Source**: 출처: Back Market 보도자료(2022.01), Francisco Partners 보도자료(2023.12)

#### Slide 05 - 10. 투자 제안 · 라운드 개요 (source 23)
- **Closing impact**: 3억 원 ask on a gradient glass card; 24개월 목표 as vertical list.
- Same strings as source slide 23.

---

## X. Speaker Notes Requirements

None requested


## User revision 3b — Upbit DESIGN.md applied (v6)

- Source: an Upbit public-web DESIGN.md supplied by the user (style reference only; no Upbit name, logo, or fonts used).
- Canvas #E9ECF1 on busy pages with white square panels; control fill #F4F5F7; ink #1A2434; muted #565D6A; border #D6D8DB.
- Blue: accent #0062DF (points and focal faces), accent-deep #003597, plus #9DB8FF kept for transparent gradients.
- Radii: panels 0, controls (48px and lower) 4. No drop shadows. Market red / fall blue not used.
- Kept from revision 2: sizes 40 / 22 / 16, Bold / Regular, Pretendard (reference web sizes 14/12 and Roboto not used).

## User revision 4 — layout system learned from the user's reference deck (v7)

Learned only alignment, placement, and size count from the reference deck (its colors and imagery were ignored on purpose):
- Full-width point-color top bar (12px) on every content page; cover uses a full-bleed deep-blue background and a bottom band.
- Centered header: small accent eyebrow (16) above a centered title (40).
- Content blocks are grouped panels: a filled header strip (deep blue, white 20 bold) on top of a light-gray body, so every block reads as one finished unit.
- Tables and term lists use filled header rows / label cells instead of loose text.
- The per-page core message moves to a full-width accent band above the footer.
- Four sizes per page (40 / 24 / 20 / 16), mirroring the reference median of four sizes per slide.
- Content fills the frame x80–1200, y132–604 with 4–16px gaps; no empty zones.
