# Project Review: ReverseLeasing / Dočasný výkup

## Overview

This is a **Next.js 16** (App Router) marketing/lead-generation site for **Dočasný výkup s.r.o.** — a Czech company offering reverse leasing and asset-backed financing (“peníze jištěné nemovitostí nebo vozem”). It is built as a **fully static** site for FTP hosting (e.g. Wedos) with no Node.js server.

---

## How the project works

### Tech stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS v4, `tw-animate-css`, CSS variables for theme (primary blue, gold CTA)
- **UI:** Radix-based components (shadcn-style) in `components/ui/`
- **Forms:** React state + `onSubmit` handlers (no server actions; currently `console.log` only — to be wired to EmailJS)
- **Analytics:** Google Tag Manager + Google Analytics (optional), loaded via scripts; no server required

### Site structure

| Route | Purpose |
|-------|--------|
| `/` | Home: hero, benefits, loan calculator (asset type, amount, name, phone) |
| `/jak-to-funguje` | How it works: process steps (real estate vs vehicle), FAQ accordion, CTA |
| `/kontakty` | Contact: phone, email, company details, CTA section |

- **Navigation:** Shared `Header` (desktop nav + mobile hamburger), `Link` to `/`, `/jak-to-funguje`, `/kontakty`.
- **No API routes:** There is no `app/api/` directory; nothing runs on the server at request time.
- **No server actions:** No `"use server"` in the codebase; forms are client-only.
- **Images:** `next.config.mjs` already has `images: { unoptimized: true }`, so no image optimization server is required.

### Main components

- **`app/layout.tsx`** — Root layout: HTML lang `cs`, Inter font, metadata (title, description, icons), global CSS, GTM + Google Analytics.
- **`app/page.tsx`** — Home: `Header`, `LeadPopup`, hero section, `LoanCalculator`, benefit grid.
- **`components/header.tsx`** — Fixed top bar, logo + “Dočasný výkup”, desktop links, mobile menu (state-based).
- **`components/loan-calculator.tsx`** — Client form: asset type (real estate / car), service type, amount slider, name + phone; submit only logs to console.
- **`components/lead-popup.tsx`** — Popup after 5s with phone field; submit logs and closes.
- **`components/cta-section.tsx`** — “Potřebujete poradit?” block with phone input; submit logs only.
- **`components/process-steps.tsx`** — Tabs for real estate vs vehicle process steps (icons + text).
- **`components/faq-section.tsx`** — Accordion of static FAQ items.

All of the above are either static content or client-side state/events; there is no server-side data fetching or server-only logic that would block a static export.

### Data flow (current)

- **Forms:** User fills fields → `onSubmit` → `handleSubmit` → `e.preventDefault()` + `console.log(...)`.
- **Navigation:** Client-side via Next.js `<Link>` (works in static export).
- **Analytics:** GTM and GA scripts in layout (client-side only).

---

## Static production build and FTP (Wedos) deployment

### Can we build a static production build?

**Yes.** This app is compatible with Next.js **static export**:

- No API routes, no server actions, no `getServerSideProps`-style logic.
- No dynamic routes that require a server.
- Images are already unoptimized, so no Next.js image server is needed.
- All interactivity is client-side (forms, popup, navigation).

So we can use **`output: 'export'`** in `next.config.mjs`. Running `next build` will produce a folder (e.g. `out/`) containing:

- `index.html` (and optionally `*.html` for other routes, depending on trailing slash config).
- `_next/` with JS/CSS chunks.
- `public/` assets (favicons, etc.).

That folder can be uploaded to **Wedos** (or any static host) via **FTP** and served as a static site. No Node, no special server.

### What we need to change for “fully functional without server”

1. **Static export**
   - In `next.config.mjs`: add `output: 'export'`.
   - Ensure no features that require a server (already the case).

2. **No server-dependent analytics**
   - Use **Google Tag Manager** and/or **Google Analytics** (e.g. gtag.js via `next/script`), driven by env vars so the site works with no server.

3. **Emails via EmailJS**
   - Forms must not call your own server. Use **EmailJS** from the browser:
     - Install `@emailjs/browser`.
     - In EmailJS dashboard: create service, template(s), and use the public key (and optionally service/template IDs) in the client.
   - Wire all three forms to EmailJS:
     - **Loan calculator:** e.g. template params: amount, assetType, serviceType, name, phone.
     - **Lead popup:** phone (and optionally source: “lead-popup”).
     - **CTA section:** phone (and optionally source: “cta-section”).
   - Use env vars for IDs/keys, e.g. `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (or separate template IDs per form if you prefer). All `NEXT_PUBLIC_*` are inlined at build time, which is fine for static export.

4. **Environment variables (build-time)**
   - For local/build: `.env.local` (and optionally `.env.production`).
   - For Wedos: you don’t run Node there; you only upload the built `out/` (or chosen output dir). So all `NEXT_PUBLIC_*` values must be set **at build time** (e.g. in CI or on your machine before running `npm run build`). The resulting HTML/JS will contain those values; no server is needed to read env at runtime.

### Summary

- **Project status:** Complete for a static marketing site; forms and analytics need to be switched to client-only (EmailJS + Google Analytics) and static export enabled.
- **Static build:** Yes — add `output: 'export'`, then `npm run build`; deploy the `out/` (or configured export dir) via FTP to Wedos.
- **Fully functional without server:** Yes — analytics via GTM/GA, all three forms send via EmailJS from the browser. No server-side calls required.

See **DEPLOYMENT.md** for exact FTP/Wedos steps and build commands.

---

## Changes made for static + FTP deployment

- **`next.config.mjs`:** Added `output: 'export'` so `npm run build` produces the `out/` folder (static HTML/JS/CSS).
- **Analytics:** GTM and **Google Analytics** components driven by `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional).
- **Forms:** All three forms (loan calculator, lead popup, CTA section) now send via **EmailJS** using `NEXT_PUBLIC_EMAILJS_*` env vars; success/error feedback is shown in the UI.
- **Docs:** Added **DEPLOYMENT.md** (build, env vars, FTP upload, optional `.htaccess`) and **.env.example** for required/optional variables.
