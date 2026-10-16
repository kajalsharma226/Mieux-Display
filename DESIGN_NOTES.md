# Reference and implementation notes

## Sources

- Requested Figma URL: https://www.figma.com/design/J4cf4vKAZkZ06ztoY1nY5Q/mieuxdisplay.com?node-id=734-4764
- The public Figma view opened a single page with the visible `Landing Page Mieux` frame. Selecting the frame exposed node `784-13046`. Its composition matched the attached screenshot.
- Attached `Screenshot 2026-10-16 at 3.07.17 PM.png` was the full-page fallback reference.
- Official animation documentation: https://reactbits.dev/backgrounds/micro-slats
- Official TypeScript/CSS registry: https://reactbits.dev/r/MicroSlats-TS-CSS.json
- Brand website checked for existing imagery, video links, social destinations, and contact email: https://mieuxdisplay.com

The public brand website's product imagery and logo were checked but were not substituted for the different artwork and serif wordmark shown in the requested frame.

## Measurements recorded before implementation

These are canvas-based visual measurements, not authenticated Figma inspect values.

| Element                    | Desktop target                                                       |
| -------------------------- | -------------------------------------------------------------------- |
| Frame width                | 1440px                                                               |
| Side gutter                | 30px                                                                 |
| Content grid               | Four 345px columns inside 1380px                                     |
| Header                     | 120px high, light gray                                               |
| Hero                       | Approximately 800px high                                             |
| Main hero type             | Approximately 160px, two lines, tight line height                    |
| Hero caption               | Approximately 60–64px, right aligned                                 |
| About statement            | Approximately 64px, explicit reference line breaks                   |
| About section              | Approximately 1320px                                                 |
| Product introduction       | Approximately 416px high                                             |
| Product rows               | Approximately 414px each, square dark image areas                    |
| Product image areas        | Approximately 345px square, dark gray, small corner radius           |
| Advantages headline        | Approximately 96px, four lines                                       |
| Advantages rows            | Approximately 75px each                                              |
| Feature                    | Approximately 574px high                                             |
| Case-study image           | Approximately 690×846px                                              |
| Featured interactive panel | Approximately 616px wide                                             |
| Contact                    | Approximately 610px high                                             |
| Palette                    | Black, white, light gray #e9e9e9, muted gray, purple around #82338c  |
| Typography hierarchy       | Large Sora headings; Poppins prose; IBM Plex Mono labels and details |

## Asset provenance

All seven local images derive from visible artwork in the supplied Figma canvas. The original screenshot contains the same imagery. Native export was gated by sign-in. Canvas screenshots were clipped to the artwork; the LED feature was further cropped to remove its already-recreated statistic. No generated imagery or unrelated stock photographs were added.

| File                     | Captured artwork                                                        |
| ------------------------ | ----------------------------------------------------------------------- |
| `advisor.jpg`            | Header advisor portrait                                                 |
| `reviewers.jpg`          | Five reviewer avatars                                                   |
| `how-mieux-works.jpg`    | Mieux exhibition video thumbnail, including its original play treatment |
| `led-wall.jpg`           | Front/rear modular LED panel and its original purple glow               |
| `case-study.jpg`         | Meeting-space photograph                                                |
| `interactive-panel.jpg`  | Mieux digital whiteboard display                                        |
| `display-specialist.jpg` | Contact specialist portrait                                             |

Original raster exports would permit sharper imagery and transparent cutouts. The contact artwork uses the CSS `darken` blend mode to integrate its canvas background on responsive layouts. The featured-panel background glow is recreated with CSS and remains an approximation.

## Scope choices

- No publishing, commits, repository pushes, backend, or extra authored routes.
- The built-in Next.js not-found route is framework output, not a new product page.
- Blank product visual areas and repeated copy/statistics intentionally match the supplied design.
- The Figma video duration is retained as artwork context; the link opens the verified company channel because the exact source video was unavailable.
- The precise mobile arrangement was adapted from desktop because no mobile frame was supplied.
- Upstream Micro Slats source is unchanged; integration settings and browser-only loading live separately.
