# Honda Part Finder

A mobile-first web app (installable as a PWA) for looking up Honda part numbers by describing the part — Honda vehicles only.

## Features

- Search bar with fuzzy matching (via [Fuse.js](https://www.fusejs.io/)) over part description, category, compatible model, and part number
- Tap a part number to copy it to the clipboard
- Installable on a phone home screen (manifest + service worker via `vite-plugin-pwa`)
- Light/dark theme support

## Data

`src/data/hondaParts.ts` currently ships with a **sample dataset** of common Honda part numbers for demo purposes. It is not verified against an official Honda parts catalog. To use real data, replace the contents of that file (or wire it up to fetch from a real parts API/CSV) — the `HondaPart` shape (`partNumber`, `description`, `category`, `models`) is all the search UI depends on.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check and production build
npm run preview  # preview the production build
```
