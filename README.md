# FocusFlow — Next.js 15 Landing Page

A production-ready Next.js 15 (App Router) landing page for FocusFlow, a ₹399/mo focus-timer app. Built to hit Lighthouse SEO & Performance ≥ 90.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve production build
```

## Project structure

```
focusflow/
├── app/
│   ├── globals.css      # Tailwind + Google Fonts import + base styles
│   ├── layout.tsx       # <title>, meta, JSON-LD, font preconnect
│   └── page.tsx         # Server Component — all 10 sections
├── components/
│   ├── CTAButton.tsx    # "use client" — fires cta_clicked event
│   └── FocusTicker.tsx  # "use client" — live animated focus timer
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
└── tsconfig.json
```

## Architecture decisions

### Why all marketing copy is in page.tsx (a Server Component)
`app/page.tsx` has no `"use client"` directive, making it a React Server Component. Next.js renders it to static HTML on the server. Every headline, feature description, testimonial, and pricing detail is present in `view-source` before JavaScript runs. This is what Google crawls — and why SSR matters for SEO.

Only two leaf components are `"use client"`:
- **`CTAButton`** — needs `onClick` to fire the analytics event
- **`FocusTicker`** — needs `useState` + `setInterval` for the countdown

Everything else is server-rendered HTML.

### JSON-LD
`SoftwareApplication` schema is embedded in `app/layout.tsx` via:
```html
<script type="application/ld+json">...</script>
```
Validate at: https://validator.schema.org
Includes `offers` with INR pricing, `aggregateRating`, and `operatingSystem`.

### Analytics event
`CTAButton` fires `cta_clicked` on every click:
```js
// If GA4 is connected
window.gtag("event", "cta_clicked", { event_label, value: 1 });

// Always — verifiable without GA wired up
console.log("[FocusFlow] cta_clicked", { event_label, timestamp });
```

To wire up real GA4: add your `G-XXXXXXXX` Measurement ID to `app/layout.tsx` and include the gtag `<script>` tags.

Each CTA has a unique `eventLabel` so you know exactly which button converts best:
- `nav_cta` — sticky nav
- `hero_primary` / `hero_secondary` — hero section
- `pricing_cta` — pricing card
- `final_cta_primary` / `final_cta_secondary` — bottom CTA

### Lighthouse targets
- **Performance**: fonts loaded with `display=swap`, no layout-shifting elements, minimal JS (only 2 client components)
- **SEO**: semantic HTML (`<header>`, `<nav>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`), unique `aria-labelledby` on every section, `role` attributes, JSON-LD, complete `<title>` + meta description + OG tags
- **Accessibility**: keyboard-focusable CTAs with `focus-visible:ring`, `aria-label` on icon-only elements, `aria-live` on the timer

---

## How I'd measure whether this page actually converts

### The funnel
```
Page visit
  → CTA clicked          (cta_clicked event — which button?)
  → Signup page view     (page_view on /signup)
  → Trial started        (trial_started event on successful signup)
  → Paid conversion      (purchase event after trial)
```

### Primary metric
**Trial conversion rate** = `trial_started` ÷ unique landing page visitors per week

Baseline in week 1. Target: lift from whatever the baseline is to 2× in 30 days.

### Secondary signals
| Signal | What it tells you |
|---|---|
| CTA click rate by placement | Which section is most convincing |
| Scroll depth | Whether users reach pricing before bouncing |
| Time on page | Too short = wrong ICP; too long = friction |
| Bounce rate by source | Organic vs paid vs direct convert differently |
| `eventLabel` breakdown | Which exact CTA drives trials |

### A/B test priority order
1. Hero headline — emotional ("change habits") vs functional ("25-minute timer")
2. Pricing section position — move above testimonials
3. CTA copy — "Start free trial" vs "Try FocusFlow free"
4. Social proof — user count vs named company logos

### Qualitative layer
After 2 weeks at stable traffic: add a single exit-intent micro-survey — *"What stopped you from signing up?"* (3 options + free text). Pair with Hotjar session recordings to see where users hesitate before leaving.

### Honest diagnostic
- High `cta_clicked`, low `trial_started` → the signup flow is broken, not this page
- Low `cta_clicked` → hero copy or value proposition needs work
- Low scroll depth + low conversion → page is too long or above-fold isn't convincing enough
