# CS

Static Angular website for computer science topics, labs, learning paths, and interview questions. Frontend only — no server, no database, no auth.

## Run locally

```bash
npm install
npm start
```

Opens at [http://localhost:4200](http://localhost:4200).

## Production build

```bash
npm run build
```

Static files land in `dist/` (`index.html` + `404.html` for hosts that fall back on missing paths).

Serve that folder with any static host (GitHub Pages, Netlify, nginx, `npx serve dist`).

## Test

```bash
npm test
```

Page specs live next to each screen in `src/app/pages/` (`home.spec.ts`, `graph.spec.ts`, …).

## Layout

- `src/content/` — topic, lab, and path data
- `src/app/lib/` — theme, progress, sim helper, utilities
- `src/app/components/` — layout, article, labs
- `src/app/pages/` — routed pages
- `src/app/app.routes.ts` — one route per section, topic, lab, and path
