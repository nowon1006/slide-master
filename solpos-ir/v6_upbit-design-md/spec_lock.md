# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## mode
- mode: briefing

## visual_style
- visual_style: glassmorphism

## colors
- bg: #FFFFFF
- secondary_bg: #E9ECF1
- primary: #003597
- accent: #0062DF
- secondary_accent: #9DB8FF
- text: #1A2434
- text_secondary: #565D6A
- border: #D6D8DB
- control: #F4F5F7
- on_dark: #FFFFFF

## typography
- font_family: Pretendard, "Malgun Gothic", sans-serif
- body: 22
- title: 40
- footnote: 16

## icons
- library: phosphor-duotone
- inventory: gauge, certificate, database, chart-line-up, seal-check

## images
- sp_navy: images/sp_navy.png | no-crop
- sp_white: images/sp_white.png | no-crop
- ds_logo: images/ds_logo.png | no-crop
- cover_illust: images/image-1-2.png | no-crop
- yt1: images/image-2-2.jpg | no-crop
- yt2: images/image-2-3.jpg | no-crop
- yt3: images/image-2-4.jpg | no-crop
- yt4: images/image-2-5.jpg | no-crop

## page_rhythm
- P01: anchor
- P02: dense
- P03: dense
- P04: dense
- P05: anchor

## pptx_structure
- mode: flat

## page_charts
- P02: kpi_cards
- P03: concentric_circles
- P04: venn_diagram
- P05: vertical_list

## forbidden
- Mixing icon libraries
- Strokes / hairline dividers as decoration (faces only)
- Blue family limited to primary / accent / secondary_accent; blue only as point color
- Drop shadows; radii other than 0 (panels) and 4 (controls) — Upbit DESIGN.md
- Market red #DD3C44 and fall blue #1375EC (exchange-only colors in the reference)
- Font sizes limited to title 40 / body 22 / footnote 16; weights Bold and Regular only
- Rewording, adding, or removing source text
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
