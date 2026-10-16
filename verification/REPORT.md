# Verification — 16 October 2026

## Build and runtime

- `npm install`: completed, 0 reported vulnerabilities at installation.
- `npm run build`: passed; Next.js generated the landing route as static content.
- `npm run typecheck`: passed with strict TypeScript enabled.
- Development server opened at `127.0.0.1:3000`.
- Compiled production server opened at `127.0.0.1:3001` for a runtime smoke check.
- All eight rendered image instances loaded successfully.
- No production console errors were observed. A development image-dimension warning was corrected by setting the specialist image's intrinsic dimensions to its real 358×451px size.
- No lint command is configured; no lint pass is claimed.

## Browser comparison

The page was visually compared, section by section, with the readable Figma canvas and attached full-page screenshot. The desktop render was captured at the reference width of 1440px.

Visible differences corrected during comparison: hero tracking, hero caption width, contrast behind copy, featured-panel width, feature-stat alignment, and tablet portrait/text overlap. A full-page overview was also inspected to compare section proportions and vertical rhythm.

| Viewport  | Result                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------- |
| 1440×1000 | Desktop reference comparison; full-page screenshot saved; no page overflow                        |
| 768×1024  | Tablet hero/contact inspected; portrait repositioned below supporting copy; no text/page overflow |
| 390×844   | Mobile hero/contact inspected; no text/control/page overflow; menu and form exercised             |
| 320×800   | Narrow-phone hero inspected; no text/control/page overflow                                        |

## Interactions exercised

- Header dialog opens, exposes all five section links, and closes with Escape.
- Selecting Get in touch closes the menu and navigates to the correct anchor.
- Hero product navigation reaches the catalogue.
- Every internal link resolves to an existing element.
- Animation pause changes its accessible pressed state and play/pause label.
- Submitting an empty form triggers the browser's required-field prompt and focuses Name.
- Completing the form with synthetic demo values produces the ready state, a populated `mailto:` draft link, and a download control. No email was transmitted.
- The download implementation creates a local text Blob; an actual file download and external email application were not exercised.

Reduced-motion handling and the static WebGL fallback were reviewed in source. OS-level motion preference switching and an actual WebGL-disabled browser were not emulated, so those checks are not claimed as browser-tested.

## Screenshots

- `desktop-hero.jpg`: final compiled desktop hero.
- `desktop-full.jpg`: final compiled full desktop page.
- `mobile-hero.jpg`: final compiled 390px hero.
- `mobile-full.jpg`: final compiled full 390px page.
- `mobile-enquiry.jpg`: synthetic enquiry ready state.
- `tablet-contact.jpg`: tablet contact layout after overlap correction.

## Remaining fidelity limits

Detailed Figma inspect values and original asset exports required sign-in. Seven original-design images were captured from the visible canvas at 70% zoom. Their sharpness, native transparency, and fine details cannot equal original exported assets. Typography metrics and spacing were inferred visually using the requested families. The CSS showcase glow and shader's evolving wave state are approximate matches, not verified identical Figma parameters. No mobile Figma frame was available. Exact pixel equality is not claimed.
