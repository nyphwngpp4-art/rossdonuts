# Ross Donuts — Brownwood, TX

One-page website for Ross Donuts, 1417 Austin Avenue, Brownwood, TX 76801.

A digital storefront, not an operational system: no backend, no database, no
forms, no CMS. Static Next.js export, deployable to Vercel (or any static host)
for free.

## Editing anything

**Every fact on the site lives in one file: `lib/site.js`** — hours, phone,
address, menu categories, review quotes, photo list, and the domain. Edit that
file, redeploy, done. The page layout is `app/page.jsx`; colors and fonts are
in `app/globals.css`.

```bash
npm install
npm run dev      # local preview at localhost:3000
npm run build    # static site output in out/
```

## Before launch: confirm with the owner

- [ ] **Hours** — listings disagree (5 AM vs 6 AM open). Site says 5:00 AM to 12:00 PM daily.
- [ ] **Phone** — IMPORTANT: public listings say (325) 642-3277 (currently on
      the site), but the shop's own cup sticker reads (325) 430-4700 and
      "1417 B Austin ave". Call or ask Ross which is right, and whether the
      address needs the "B" suffix.
- [ ] **Menu categories** — donuts / breakfast (kolaches, croissants, biscuits) / coffee & drinks. No prices shown by design.
- [ ] **Reviews** — the three quotes in `lib/site.js` are excerpts seen in public Google reviews. Verify exact wording against the live reviews right before launch; do not rewrite them.
- [ ] **Rating** — confirm the live Google rating (site says 4.7 stars, review count deliberately not shown).
- [ ] **Domain** — `lib/site.js` has a placeholder (`rossdonutsbrownwood.com`). The owner should own the domain, even if you maintain the site.

## Photos

Four real shop photos are live: the hero (iced coffee and decorated donuts)
plus a gallery with the lit storefront sign, a latte with the shop sticker,
and a croissant breakfast sandwich. The license plate in the storefront shot
is blurred.

Still wanted from the next visit (20 minutes, an iPhone is fine):

1. **The owner behind the counter** — this should become the hero image
   (swap the `src` in the hero `<img>` in `app/page.jsx`)
2. Full display case
3. Fresh kolaches in the warmer
4. Donuts being boxed / handed across the counter

To add more: drop optimized JPGs into `public/images/` and add entries to the
`photos` array in `lib/site.js` — the gallery updates automatically.

## Deploying on Vercel

1. Import this GitHub repo at vercel.com/new (framework auto-detected).
2. Every push to the main branch redeploys automatically.
3. Free tier is plenty; there is no server-side code.

When the real domain is purchased, add it in Vercel's domain settings **and**
update `url` in `lib/site.js` so the sitemap, robots.txt, and social-sharing
tags point at it.

## What's included

- LocalBusiness/Bakery structured data (address, hours, phone for Google)
- Page title, meta description, Open Graph tags + `public/og.png` share image
- `sitemap.xml` and `robots.txt` (generated at build)
- Mobile fixed Call | Directions bar
- Light and dark mode, reduced-motion support
