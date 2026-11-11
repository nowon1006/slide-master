# 솔포스 IR 시안 v2 (slide-master 파이프라인)

slide-master의 메인 SVG 파이프라인(전략 확정 → 페이지별 SVG 작성 → 품질 검사 → PPTX 내보내기)으로 만든 7장 시안 3세트입니다.
슬라이드는 원본 1, 2, 5, 6, 12, 21, 23번이고, 원본 문구와 숫자는 수정·추가 없이 그대로입니다.

| 폴더 | 방향 | 화면 스타일 | 아이콘 |
|---|---|---|---|
| `A_glass-blue/` | 연한 블루 바탕 + 반투명 유리 패널, 그라데이션 빛 | glassmorphism | phosphor-duotone |
| `B_iso-block/` | 흰 바탕 + 장마다 위치가 바뀌는 큰 남색 면, 입체 칩 큐브 | custom(아이소 블록) | chunk-filled |
| `C_light-tech/` | 흰 바탕 + 반도체 다이 타일, 남색→블루→시안 리본 | custom(라이트 테크) | tabler-filled |

- 각 폴더: 완성 PPTX, `design_spec.md`(디자인 명세), `spec_lock.md`(색·글꼴·크기 고정값), `svg_output/`(페이지 원본 SVG), 사용 이미지·아이콘
- `previews/`: 내보낸 PPTX를 LibreOffice로 렌더링한 미리보기. LibreOffice는 한글·영문 사이 간격을 넓게 그려 일부 제목이 밀려 보일 수 있습니다. PowerPoint에서 확인해 주세요.
- 공통: 글꼴 Pretendard(발표 PC에 설치 필요), 본문 24px, 제목 40px, 핵심 메시지 26px, 출처 16px
- 확인 사항(사용자 확정): 세 방향 모두 추천 색상, 수정 메모 "AI, 반도체와 어울리는 색감" → 시안 계열 글로우 색 추가
