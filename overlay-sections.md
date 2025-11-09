# Overlay Sections — Design and Implementation

This document describes how the overlay sections are implemented and how to create new ones. It focuses strictly on the overlay content components and their styles, not on the horizontal page scroller.

## Purpose
- Present rich, focused content inside a modal-style overlay panel.
- Keep overlay content components self-contained, styled with CSS modules.
- Maintain accessibility and responsive behavior across breakpoints.

## Key Overlay Content Components

- `HeroHorizontalPage/AboutOverlayContent.js`
  - Two-column layout with heading and supporting card.
  - Styles: `AboutOverlayContent.module.css` (grid layout, accent dot, card with shadow and subtle border).

- `HeroHorizontalPage/ServicesOverlayContent.js`
  - Grid of service cards with icons, titles, and bullet features.
  - Uses `framer-motion` to animate each card on enter (`whileInView`).
  - Styles: `ServicesOverlayContent.module.css` (absolute inset, grid, card shadows, accent check badge).

- `HeroHorizontalPage/ServicesProcessOverlayContent.js`
  - Vertical list of process “pill” rows with icon, title, and description.
  - Each row uses a light cream background with subtle borders and shadows.
  - Styles: `ServicesProcessOverlayContent.module.css` (grid wrapper, pill rows, icon container, responsive adjustments).

## Styling System
- CSS Modules per component ensure local scoping.
- Color palette leverages global CSS variables defined in `styles/globals.css` (e.g., `--color-deep`, `--color-ice`).
- Transparency and shadows use `rgba(...)` values tuned for legibility against `#FCFBF9` (Light Cream).
- Responsive rules via media queries target common breakpoints (720px, 820px, 480px).

## Overlay Content Contract
- Overlay content components do not manage opening/closing; they render content only.
- They rely on the host overlay container to supply space and padding.
- Avoid fixed positioning inside content; use grid/flex and respect the container’s safe insets.

## Lifecycle & Events (Consumption Only)
- Overlay open/close is driven by parent section components:
  - Example: `SectionContent/AboutContent.js` and `SectionContent/ServicesContent.js` set `overlayOpen` state and pass content via `customContent={<.../>}`.
- Global events are used to coordinate overlays across sections:
  - `window.dispatchEvent(new Event('app:close-overlays'))` — notify listeners to close overlays.
  - `window.addEventListener('app:open-overlay', handler)` — optional pattern to open a section’s overlay by name.
- Overlay content components do not attach event listeners themselves.

## Accessibility
- Use semantic tags (`h2`, `h3`, `p`, `ul`, `li`) within content.
- Provide `aria-hidden` only for decorative elements (e.g., accent dot).
- Buttons include `aria-label` when the visual label is an icon or symbol (e.g., arrow button in process rows).

## Adding a New Overlay Section (Recipe)
1. Create a content component in `components/HeroHorizontalPage/` (e.g., `NewOverlayContent.js`).
2. Add a paired CSS module (e.g., `NewOverlayContent.module.css`) with layout and responsive rules.
3. Keep the component stateless; accept no props unless they are strictly for rendering (e.g., items array).
4. In the consuming section (e.g., `components/SectionContent/YourSection.js`):
   - Manage `overlayOpen` state.
   - Render the overlay container and pass your content via `customContent={<NewOverlayContent />}`.
   - Dispatch/handle global close events if coordinating multiple overlays.
5. Test responsiveness at 480px, 720px, and 820px breakpoints.
6. Verify contrast and shadows against `#FCFBF9` panel backgrounds.

## Design Notes
- Layouts favor readability: generous spacing, soft shadows, and subtle borders.
- Accent color `#c79211` is used for highlights and badges; body text uses `var(--color-deep)`.
- Avoid backdrop-filter in overlays to prevent flicker on sticky/rotating panels.

## Files Referenced (for quick lookup)
- `components/HeroHorizontalPage/AboutOverlayContent.js`
- `components/HeroHorizontalPage/AboutOverlayContent.module.css`
- `components/HeroHorizontalPage/ServicesOverlayContent.js`
- `components/HeroHorizontalPage/ServicesOverlayContent.module.css`
- `components/HeroHorizontalPage/ServicesProcessOverlayContent.js`
- `components/HeroHorizontalPage/ServicesProcessOverlayContent.module.css`

This document is intentionally scoped to overlay content implementation and usage. Horizontal page mechanics (scrollers, indicators, panel container) are outside this file.