# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## mode
- mode: briefing

## visual_style
- visual_style: custom
- visual_style_behavior: Light technical aesthetic on a white field: semiconductor die and circuit motifs rendered as filled tile grids (not line art); a primary→accent→glow gradient ribbon used as one horizontal band per page; key numbers sit on soft radial glow faces; a faint dot-matrix grid in one corner; medium rounded corners (12px); precise alignment to a 40px grid; no strokes — all separation by tinted faces.

## colors
- bg: #FFFFFF
- secondary_bg: #EEF3FF
- primary: #1E2188
- accent: #106EB8
- secondary_accent: #22C3EE
- glow: #22C3EE
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
- library: tabler-filled
- inventory: download, gauge, award, file-text, bolt, chart-area-line, device-desktop

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
