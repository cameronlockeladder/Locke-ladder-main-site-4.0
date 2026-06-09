# Locke & Ladder - Template Handoff

This project is a source package of reusable page templates for the Locke & Ladder site. It is a
prototype/staging build, not a production deployment. Do not deploy from here. The intended path is
to port these templates into the final owned Vercel site.

## What is in here

A data-driven React (Create React App + craco) prototype with two real page types and a placeholder.

### Architecture

```
src/
  data/
    siteMeta.js                 Brand, NAP, nav links, service regions, reviews, ROBOTS policy
    homePageData.js             All homepage content + SEO fields
    servicePages/
      roofing.js                Roofing page content + SEO fields (first real service page)
      index.js                  Registry: slug -> service data (getServicePage)
  templates/
    HomePageTemplate.jsx        Renders the homepage from homePageData
    ServicePageTemplate.jsx     Renders any service page from a service data object
  pages/
    Home.jsx                    <HomePageTemplate data={homePageData} />
    ServicePage.jsx             Looks up slug in the registry -> <ServicePageTemplate />
    ComingSoon.jsx              Placeholder for routes not built yet
  components/
    site/Nav.jsx                Sticky desktop nav + full-screen mobile menu
    site/Footer.jsx             Visible NAP (both offices, phone, email, hours)
    seo/schemaBuilders.js       Pure JSON-LD builders (LocalBusiness/RoofingContractor, WebPage,
                                Service, FAQPage, BreadcrumbList, WebSite, Dataset)
    seo/Seo.jsx                 Runtime head injector (title, meta, canonical, OG, JSON-LD)
    home/*.jsx                  Prop-driven homepage sections (reused by service pages too)
    service/*.jsx               Service-only sections (hero, decision, materials, inspect)
    Reveal.jsx                  Progressive-enhancement reveal (content visible by default)
    ui/accordion.jsx            The only shadcn component still used (FAQ)
```

### Routes

`/` (home), `/roofing/` (real service page). All other nav targets resolve to `ComingSoon`:
`/windows-doors/`, `/siding/`, `/gutters/`, `/cost-scope-index/`, `/service-areas/`,
`/project-proof/`, `/start-here/`. There are no links to `/cost/` or `/windows/`.

## How to reuse the service template (for example windows-doors)

1. Copy `src/data/servicePages/roofing.js` to `src/data/servicePages/windows-doors.js`.
2. Update slug, SEO fields, hero, decision factors, materials/options, cost items, inspect items,
   proof items (use only approved imagery and real outcomes), FAQ, areas, related, and finalCta.
3. Register it in `src/data/servicePages/index.js`:
   ```js
   import { windowsDoors } from "@/data/servicePages/windows-doors";
   export const servicePages = { roofing, "windows-doors": windowsDoors };
   ```
4. Point the route at the template in `src/App.js`:
   ```jsx
   <Route path="/windows-doors/" element={<ServicePage slug="windows-doors" />} />
   ```
No template component changes are required. The same applies to `siding`, `gutters`, `commercial`,
and any future service page.

## Production launch changes (do before going live, with owner approval)

1. Robots: `src/data/siteMeta.js` exports `ROBOTS = ROBOTS_STAGING` (`noindex,nofollow`). For
   production set `ROBOTS = ROBOTS_PRODUCTION` (`index,follow`). The homepage may flip first; the
   roofing page should flip to `index,follow` only after final owner approval of the copy.
   Also update `public/index.html` default robots (currently `noindex,nofollow`).
2. SEO rendering: this prototype sets per-route title/meta/canonical/OG and injects JSON-LD at
   runtime via `Seo.jsx`. In the production port (static/SSR, for example Next.js on Vercel),
   render these tags and the JSON-LD in the server `<head>`. The data objects and `schemaBuilders.js`
   are framework-agnostic and move over directly.
3. Domain + assets: set the real canonical/OG domain and host `/images` and `/fonts` on it.
   `SITE.baseUrl` in `siteMeta.js` is the single place to change the domain.
4. Fonts: the display font is the Termina TEST build (limited glyph set: A-Z a-z 0-9 , . - space;
   Inter is the per-glyph fallback for `&`, `$`, middle-dot). Replace with a fully licensed Termina
   (full glyph set) for production.
5. Imagery: confirm photo usage rights and swap in final preferred project photos. Verify alt text.
6. Schema review: confirm `aggregateRating` (5.0 / 229) and the review quotes (Gilda Hickman, Amy)
   are approved for schema use. Both appear visibly on the page and in schema; keep them in sync.
7. Add favicon, web app manifest, social share image, `sitemap.xml`, and `robots.txt`.

## Audit fixes applied in this refactor

- Removed the Emergent badge and the Emergent injected script from `public/index.html`.
- Removed the injected PostHog analytics snippet and the injected error-handler script.
- Reproducible lockfile present (`yarn.lock`); install with `yarn install --frozen-lockfile`.
  Use yarn only. Do not use npm.
- Removed unused dependencies (framer-motion, axios, react-query, most radix/shadcn packages,
  recharts, embla, vaul, cmdk, input-otp, react-day-picker, date-fns, lodash, etc.) and deleted the
  unused shadcn ui components. Only `ui/accordion.jsx` remains.
- Reveal no longer hides content. `Reveal.jsx` keeps content fully visible by default; the hiding
  class is added only by JS when motion is allowed, with a safety timer, so animation is never
  required for text to appear. `prefers-reduced-motion` disables it entirely.

## Backend

The repository still contains a FastAPI scaffold under `/app/backend`. These templates do NOT use
it (no API calls, no data fetching). It is kept only so the local supervisor stays healthy in this
environment. Exclude `/app/backend` entirely when porting to the static/Vercel production site.

## Brand and copy rules (enforced)

No emojis. No em dashes. No fake reviews or invented numbers. No fake certifications. No banned
contractor phrases (`quality craftsmanship`, `free estimate`, `call today`, `licensed and insured`,
`we are the best`). Never use `463-298-9989`. Never use `lockeandladder.com`.
