# dmbtgroup.com

The DMBT company website: the DMBT logo on a moving background, with links to DMBT's products.

- **TactLab** — lab and shop management: https://tactime.dmbtgroup.com
- **Domora** — condominium management: https://condo.dmbtgroup.com

It is a static site (no build step): `index.html`, with styles, script and images in `assets/`.
The page shows in English, French or Arabic, following the visitor's browser language.
Any other address, such as a company link `dmbtgroup.com/cmtb`, forwards to the same address on
tactime.dmbtgroup.com (see `vercel.json`).

To add a product, add another `brand-product` link in `index.html` and its French and Arabic text in
`assets/site.js`.

Pushing to `main` deploys to Vercel (`.github/workflows/deploy.yml`); it needs a `VERCEL_TOKEN` secret.
