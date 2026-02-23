# Půjčka formulář — hnedpenize

Static marketing site for **Dočasný výkup s.r.o.** (reverse leasing, asset-backed financing). Built with Next.js and deployed as a **static export** via FTP to Wedos.

## Overview

- **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS
- **Deployment:** Static build (`output: 'export'`) → upload `out/` via FTP to Wedos. No Node.js on the server.
- **Analytics:** Google Tag Manager + Google Analytics (optional, via env vars)
- **Forms:** EmailJS (browser-side; no backend required)

## Build and deploy

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_*` variables (EmailJS, GTM, GA, site URL).
2. Run `npm install` and `npm run build`.
3. Upload the **contents** of the `out/` folder to your Wedos hosting via FTP.

See **DEPLOYMENT.md** for detailed steps (env vars, FTP upload, optional `.htaccess`).
