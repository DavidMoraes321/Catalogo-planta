# Base44 Setup Notes

## Project Overview
- **Catálogo de Plantas** — a Vite + React + TypeScript + Tailwind CSS frontend app (Portuguese).
- No backend, no database, no external services. Pure static frontend.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Vite dev server runs on port 5173 inside the container, mapped to host port 3000.
- No lockfile exists; `npm install` runs on container startup.
- Source is bind-mounted at `/app`, so edits hot-reload via Vite.

## Verification
- `curl http://localhost:3000/` should return the HTML with `<div id="root">`.
- The app renders a plant catalog grid with search and category filters.

## No Secrets Required
- This app has no external service dependencies and needs no credentials.
