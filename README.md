# Ross Donuts & Coffee — Brownwood, TX

A simple one-page website for Ross Donuts, 1417 Austin Ave, Brownwood, TX 76801.

The whole site is a single file (`index.html`) with no build step, no frameworks,
and no dependencies. It can be hosted anywhere that serves static files.

## Before going live: verify with Ross

The details on the page came from public listings (Yelp, the Brownwood Chamber,
review sites). Confirm these with Ross before publishing:

- [ ] **Hours** — listings show either 5:00 AM or 6:00 AM open, closing at noon.
      The site currently says **5:00 AM to 12:00 PM daily**.
- [ ] **Phone** — the site uses **(325) 642-3277**.
- [ ] **Menu items** — donuts, specialty donuts, kolaches (incl. boudin),
      cinnamon rolls, donut holes, coffee. Add or remove whatever he actually sells.
- [ ] **The shop name** — the site says "Ross Donuts & Coffee". Match however he
      writes it on his sign/receipts.

To change any of it, open `index.html` and search for the text you want to edit.

## Adding photos

The site looks complete without photos, but real photos will make it his.
There's a ready-made gallery section commented out near the bottom of
`index.html`:

1. Create an `images/` folder next to `index.html`.
2. Add three photos named `shop-1.jpg`, `shop-2.jpg`, `shop-3.jpg`.
   Good picks: the donut case, the storefront, Ross behind the counter.
   (He can text you photos, or grab the ones from his Google Business Profile.)
3. Remove the `<!--` and `-->` around the `<section id="photos">` block.

## Free hosting options

Any of these are free and take a few minutes:

- **GitHub Pages** (easiest since the code is already here):
  repo Settings → Pages → Source: "Deploy from a branch" → pick the branch,
  root folder. The site appears at `https://<user>.github.io/rossdonuts/`.
- **Netlify / Cloudflare Pages / Vercel**: connect the repo or drag-and-drop
  the folder. All give a free subdomain and free SSL.
- A custom domain like `rossdonutsbrownwood.com` runs ~$10-12/year and can be
  pointed at any of the above.

## Nice next steps (optional)

- Ask Ross to add the site URL to his Google Business Profile ("Website" field).
  That's where most people will actually find it.
- A `sitemap` isn't needed for a one-page site; the structured data
  (`application/ld+json` in the `<head>`) already tells Google the address,
  hours, and phone.
