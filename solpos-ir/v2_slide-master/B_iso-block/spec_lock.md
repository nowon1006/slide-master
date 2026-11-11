# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## mode
- mode: briefing

## visual_style
- visual_style: custom
- visual_style_behavior: Bold color-block composition on a white field: one large flat brand-primary plane per page whose position changes page to page (left pillar, bottom band, split half, top band) so no two consecutive pages share the same framing; isometric stacked-chip cubes (three flat faces per cube, top face lightest) as the recurring motif; near-square corners (4px); no strokes or hairlines anywhere — separation by fills and white gaps; large heavy numerals; dense content sits on pale tint planes.

## colors
- bg: #FFFFFF
- secondary_bg: #F1F3FA
- primary: #1E2188
- accent: #2D5BFF
- secondary_accent: #F1CE36
- glow: #5CD0FF
- highlight: #F1CE36
- text: #12152E
- text_secondary: #5B6178
- border: #DDE3F5
- on_dark: #FFFFFF

## typography
- font_family: Pretendard, "Malgun Gothic", sans-serif
- code_family: Consolas, "Courier New", monospace
- body: 24
- title: 40
- cover_title: 60
- hero_number: 48
- lead: 26
- subheading: 26
- table: 20
- annotation: 18
- footnote: 16

## icons
- library: chunk-filled
- inventory: arrow-down-to-line, gauge-high, badge-check, file, robot, chart-line, rocket

## images
- sp_navy: images/sp_navy.png | no-crop
- sp_white: images/sp_white.png | no-crop
- ds_logo: images/ds_logo.png | no-crop
- cover_illust: images/image-1-2.png | no-crop
- yt1: images/image-2-2.jpg | no-crop
- yt2: images/image-2-3.jpg | no-crop
- yt3: images/image-2-4.jpg | no-crop
- yt4: images/image-2-5.jpg | no-crop
- platform: images/image-6-2.png | no-crop
- jetson: images/image-12-2.png | no-crop
- csv: images/image-12-3.png | no-crop
- turtlebot: images/image-12-4.png | no-crop
- vital: images/image-12-5.png | no-crop

## page_rhythm
- P01: anchor
- P02: dense
- P03: dense
- P04: dense
- P05: dense
- P06: dense
- P07: anchor

## pptx_structure
- mode: flat

## page_charts
- P02: kpi_cards
- P03: concentric_circles
- P04: numbered_steps
- P06: financial_statement_table
- P07: vertical_list

## forbidden
- Mixing icon libraries
- Strokes / hairline dividers as decoration (faces only)
- Rewording, adding, or removing source text
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
