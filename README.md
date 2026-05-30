# eportfoolio — Rasmus Linde

Personal e-portfolio built with **React + Vite**.

This repo includes an automated **image optimization pipeline** and several production-safe performance improvements (code-splitting/lazy loading) while keeping the UI stable across desktop + mobile.

## Highlights

- Responsive UI (desktop + mobile)
- Animated background + micro-interactions
- Modal/pop-up UX that doesn’t get blocked by the navbar (mobile-safe)
- **Automatic image optimization** (AVIF/WebP) on build/preview
- **Safe code splitting** to reduce initial JS

## Tech stack

- React
- Vite
- CSS (custom)
- `three` (background)
- `motion` (UI effects)
- `gsap` (animations)
- `lenis` (scroll)

## Getting started

### Install

```bash
npm install
```

### Dev server

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build

`build` also runs the image optimizer.

```bash
npm run build
```

### Preview (production build)

`preview` also runs the image optimizer.

```bash
npm run preview
```

## Image optimization (AVIF/WebP)

Images under these folders are processed:

- `public/assets/**`
- `src/assets/**`

The optimizer outputs to:

- `public/optimized/**`

Script:

- `scripts/optimize-images.mjs`

Notes:

- Generates AVIF + WebP.
- For large images, it generates responsive widths (currently `480/768/1024/1280`).
- A manifest is written to `public/optimized/manifest.json`.

### Using optimized images in React

Use `OptimizedPicture`:

- `src/lib/optimizedImage.jsx`

It produces a `<picture>` with AVIF/WebP `srcset` and always falls back to the original `src` to avoid broken images.

## Performance notes

### Code splitting

Some heavier parts are lazy-loaded in `src/App.jsx`:

- below-the-fold sections (e.g. About/Education/Experience)
- the animated Three.js background (`FloatingLines`)

This keeps initial JS smaller, without changing the visible UI.

## Modal / pop-up layering (mobile fix)

On mobile, the navbar burger hit-area must never block modal close buttons.

This project uses body attributes to coordinate layering:

- `data-about-modal-open` (About section modals)
- `data-bounce-modal-open` (BounceGallery modal)

When a modal is open, fixed UI (navbar + contact widget) is pushed behind the overlay via CSS in `src/App.css`.

## Project structure (high level)

```
public/
  assets/                # source images
  optimized/             # generated AVIF/WebP output
scripts/
  optimize-images.mjs    # sharp-based optimizer
src/
  components/
  lib/
    optimizedImage.jsx   # <OptimizedPicture />
  App.jsx
  App.css
  main.jsx
```

## Deployment

This is a static Vite build. Deploy `dist/` to any static host (Vercel/Netlify/GitHub Pages/etc.).
