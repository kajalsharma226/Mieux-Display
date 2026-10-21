# Mieux Display landing page

A local, single-page Next.js 16.4.2 project using the App Router, React 19.3.1, strict TypeScript, and structured global CSS. No backend, API routes, authentication, or database. Nothing was deployed, committed, or pushed.

## Run locally

Requires Node.js 20.9 or newer; verified using Node.js 22.21.1.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. For a production demonstration:

```sh
npm run build
npm start
```

Additional check: `npm run typecheck`.

## Implemented sections

The reference header and menu, animated hero, company introduction and video card, four product rows, advantages, LED display feature and statistics, case study, interactive-panel showcase, nationwide support, contact section, and oversized wordmark footer are implemented.

The design's Lorem Ipsum, repeated statistics, dark empty product-image areas, and future case-study date are preserved. They are reference content, not newly researched claims.

## Fonts

All three required families use `next/font/google` in `app/layout.tsx`, with Latin subsets and `display: swap`:

| Variable               | Family / weights       | Application                                                                     |
| ---------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| `--font-sora`          | Sora 400, 600, 700     | Headlines, buttons, product names, prominent numbers, support descriptions      |
| `--font-poppins`       | Poppins 400            | Body copy, introductory paragraphs, form feedback                               |
| `--font-ibm-plex-mono` | IBM Plex Mono 400, 500 | Navigation, section labels, specifications, metadata, form fields, footer links |

The small header wordmark and large footer wordmark use system serif fonts to follow the reference's serif lettering. Google Fonts are fetched during initial development/build and self-hosted by Next.js in the compiled application.

## Micro Slats

`components/background/MicroSlats.tsx` is the official React Bits TypeScript/CSS implementation, obtained from https://reactbits.dev/r/MicroSlats-TS-CSS.json. Its declared dependency is `ogl@^1.0.11`; this project pins OGL 1.0.11. The official manual-copy installation method was used. Upstream code and license are included.

`HeroBackground.tsx` loads it with `ssr: false` because the upstream color parser accesses `document`. The hero uses animated WebGL slats, purple and lavender colors, a dark background, speed 0.22, restrained perspective, 10×38px slats and 5px gaps. Phones use 4×20px slats and 2px gaps. A shade preserves copy contrast.

The visible pause/play control works independently of OS motion preferences. `prefers-reduced-motion` freezes the shader and disables CSS entrance motion and smooth scrolling; changes to that preference remount the component. Unsupported WebGL devices see a static CSS slat fallback. The CSS fallback is not presented as the animated implementation. The upstream component also suspends its animation loop when outside the viewport.

## Interactions and responsive behavior

- The header menu is a native modal dialog, with focus management, Escape dismissal, close control, and working section links.
- Hero actions, enquiry buttons, and footer navigation scroll to real sections.
- The video thumbnail opens the brand's real YouTube channel; the exact 1:30 source video in Figma could not be exported or identified.
- The contact form validates required fields and email format, then prepares a local enquiry. Visitors can open an email draft or download a text file. It never reports a message as sent. There is no server submission or storage.
- External social links open in new tabs. The LinkedIn destination is a company search because an exact official profile was not verified.
- The desktop four-column grid adapts to tablet and stacked phone layouts, with accessible focus indicators, a skip link, semantic headings, and labelled form controls.

## Project files

```text
app/
  layout.tsx                 Metadata and required Google fonts
  page.tsx                   Server-rendered landing page
  globals.css                Layout, animation, responsive styles
components/
  background/
    HeroBackground.tsx       Client-only integration and motion controls
    MicroSlats.tsx           Official upstream implementation
    MicroSlats.css
    LICENSE.react-bits.md
  landing/
    Header.tsx               Menu dialog
    ContactForm.tsx           Local enquiry behavior
public/images/               Seven images captured from the Figma canvas
verification/                Browser screenshots and verification report
DESIGN_NOTES.md               Reference measurements, provenance, limitations
next.config.ts
tsconfig.json
next-env.d.ts
package.json
package-lock.json
.gitignore
```

All files in this new project were created for this request; no existing application was modified.

## Verification and remaining differences

The production build and `npm run typecheck` pass. The development and production pages were opened in the browser. Desktop sections were compared visually with the Figma canvas and supplied screenshot; headline tracking, featured-panel size, feature-stat alignment, contrast, and responsive contact positioning were adjusted.

Layouts were checked at 1440×1000, 768×1024, 390×844, and 320×800. No horizontal page overflow or overflowing text/controls was found at those checked widths. All eight rendered image instances loaded. Menu opening, Escape dismissal, section navigation, animation pause, native required-field validation, and local enquiry preparation were exercised. The production page rendered without console errors. No lint tool was configured. See `verification/REPORT.md` for details.

Figma's public canvas is viewable, but its detailed inspection, presentation, and native export controls required sign-in. The seven supplied-design images were therefore captured from the visible canvas at 70% zoom, not exported as original high-resolution files. Image sharpness is the main remaining difference. Font sizes, spacing, and glow were measured visually rather than obtained from authenticated inspect values; exact pixel equality is not claimed. No mobile Figma frame or original animation settings were available.

The source ZIP excludes `node_modules`, `.next`, and build caches. Verification screenshots are included. Local preview processes are stopped after QA; run the commands above to launch your own demonstration.
# Mieux-Display
# mux-display
