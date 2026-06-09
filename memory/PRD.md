# Locke & Ladder - Homepage PRD

## Original Problem Statement
Build ONLY the homepage for "Locke & Ladder", a premium luxury exterior design and roofing firm serving the Indianapolis metro and the western Chicago suburbs. Frontend-only, premium dark editorial experience, SEO/AEO/GEO-ready. No service pages, blog, CRM, backend, database, auth, admin, booking, or dashboards. Source of truth: `emergent-homepage-context-pack-2026-06-08.md`.

## Architecture
- Stack: React 19 (CRA + craco), Tailwind CSS, react-router-dom, framer-motion (subtle reveals), Shadcn Accordion. No backend used (the FastAPI/Mongo template is untouched and idle).
- Routing: `/` -> Home. Future routes (`/roofing/`, `/windows-doors/`, `/siding/`, `/gutters/`, `/cost-scope-index/`, `/service-areas/`, `/project-proof/`, `/start-here/`) and `*` -> lightweight `ComingSoon` placeholder (full pages intentionally not built).
- SEO/AEO: All static meta (title, description, canonical, OG/Twitter, robots index,follow) and ALL JSON-LD (RoofingContractor + LocalBusiness + HomeAndConstructionBusiness graph node, Burr Ridge branch, WebSite, WebPage, Dataset, FAQPage) live in `public/index.html` for crawlability without JS. FAQ schema is kept verbatim-identical to visible FAQ copy (verified by `/app/scripts/verify_homepage.py`).
- Content: single source of truth at `src/data/content.js`.
- Assets: real Locke & Ladder media self-hosted from the official brand repo (cameronlockeladder/locke-ladder-brand-assets) into `public/images`, `public/brand`, `public/fonts` (15 images optimized to <=1920px, Termina Test woff2 fonts).

## User Persona
High-end homeowner in Indianapolis metro / western Chicago suburbs evaluating a major exterior decision (roofing, siding, windows/doors, gutters, storm claims). Wants honest scope, real cost ranges, and proof before any sales pressure.

## Core Requirements (static)
- Premium, anti-generic-contractor, editorial dark design (#111111 base, #ededed text, copper accent).
- Hard copy rules: no emojis, no em dashes, no banned contractor phrases, no fake claims/numbers.
- Exact hero copy, trust signals, cost dataset numbers, FAQ, and NAP from the context pack.
- Required JSON-LD types, canonical, title, meta description, robots.
- Fully responsive, no horizontal overflow, usable mobile nav, semantic HTML, alt text + image dimensions, hero prioritized / below-fold lazy-loaded.

## Implemented (2026-06-08) - Template Refactor
- Refactored the single homepage into reusable, data-driven templates: `templates/HomePageTemplate.jsx` (driven by `data/homePageData.js`) and `templates/ServicePageTemplate.jsx` (driven by service data objects). Added global `data/siteMeta.js` (brand, NAP, nav, regions, reviews, ROBOTS policy).
- Built a real `/roofing/` page (`data/servicePages/roofing.js` + registry `servicePages/index.js` + `pages/ServicePage.jsx`) proving the service template: hero/direct-answer, "roofing is a system" decision block, materials with tradeoffs, cost snapshot, inspection checklist, proof, 6-item FAQ, service areas, related services, final CTA. New service sections under `components/service/`.
- SEO moved to runtime per-route injection: `components/seo/Seo.jsx` (title/meta/canonical/OG) + `components/seo/schemaBuilders.js` (LocalBusiness/RoofingContractor, WebSite, WebPage, Service, FAQPage, BreadcrumbList, Dataset). FAQ schema is generated from the same data the FAQ renders, so it always matches (verified 8/8 home, 6/6 roofing).
- Audit fixes: removed Emergent badge + emergent-main.js + PostHog snippet + injected error script from `index.html`; staging robots set to `noindex,nofollow`; `Reveal.jsx` rewritten so content is visible by default (hide-class added only by JS when motion allowed, with safety timer; reduced-motion safe). Removed framer-motion.
- Dependency cleanup: removed ~45 unused deps (framer-motion, axios, react-query, most radix/shadcn, recharts, embla, vaul, cmdk, etc.) and all unused shadcn ui components except `accordion`. Clean `yarn install --frozen-lockfile` passes (no --legacy-peer-deps); production build passes (JS 141KB->102KB, CSS 11KB->5.5KB gzipped). `TEMPLATE_HANDOFF.md` documents architecture, reuse steps, and production-launch changes. Backend scaffold left in place for env health but excluded from the production port (documented).
- Verified by testing agent (iteration_4): 11/11 PASS, no console errors, no horizontal overflow at 390/768/1440 on both `/` and `/roofing/`.

## Implemented (2026-06-08)
- 11 homepage sections: Hero, Direct Answer intro, What We Do (6 systems), Real Cost Ranges (editorial table + disclaimer), How We Work (5 steps), Founder/Ethos (Jon Strand / Herron School of Art), Project Proof (3 specifics + Gilda Hickman & Amy approved quotes + Google 5-star), Where We Work (IN + IL city lists), Common Questions (8-item FAQ accordion), Final CTA, Footer with visible NAP (both offices, hours, phone, email).
- Sticky desktop nav (7 links + Start here CTA) and full-screen mobile overlay nav (Esc-to-close, scroll-lock, aria-controls).
- All 7 required JSON-LD blocks; FAQPage matches visible FAQ verbatim; aggregateRating 5.0/229 matches visible copy.
- Self-hosted Termina (Test build) display font + Inter body; per-glyph Inter fallback for `&`, `$`, middle-dot.
- Verified: no horizontal overflow at 390/768/1440; production build compiles (141KB JS / 11KB CSS gzipped); testing agent 100% pass.

## Prioritized Backlog
- P0 (owner approval before production launch): swap in licensed full Termina font; confirm photo usage rights / final imagery; confirm aggregateRating + review quotes approved for schema; finalize/confirm NAP vs Google Business Profile; host assets + set real canonical/OG on lockeladder.com; add favicon + social share image; decide robots policy for staging vs production.
- P1: Build out service pages (`/roofing/`, `/windows-doors/`, `/siding/`, `/gutters/`), the full Cost & Scope Index page, Service Areas, Project Proof gallery, and Start Here intake flow.
- P2: Optional analytics/consent, sitemap.xml + robots.txt, OG image generation, before/after sliders (assets exist in brand repo).

## Next Tasks
1. Collect owner approvals (P0 list above).
2. On approval, begin P1 service pages reusing the established design system and `content.js` pattern.
