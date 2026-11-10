# dmbtgroup.com

The DMBT website: an industrial engineering company page with links to DMBT's products.

- **TactLab** — lab and shop management: https://tactime.dmbtgroup.com
- **Domora** — condominium management: https://condo.dmbtgroup.com
- **TactHR** — HR and payroll management: https://tacthr.dmbtgroup.com

It is a static site (no build step): `index.html`, with styles, script and images in `assets/`.

**Intro.** On the first visit in a browser session, the DMBT logo shows alone in the centre, glides into
the header, and then the page appears. Later page loads in the same session (and visitors who prefer
reduced motion) go straight to the page. Visitors can skip it with "Skip" or Esc.

**Sections.** Header · hero with a line-study drawing · the D-M-B-T principles · services · how we work ·
industries · products · contact · footer.

**Languages.** English, French or Arabic (right to left), following the visitor's browser language or the
EN / FR / ع switch in the header, which is remembered in a `lang` cookie. English text lives in
`index.html`; each translated element has a `data-i18n` key whose French and Arabic text is in
`assets/site.js`. To change wording, edit both places.

**Contact.** The contact section has no email button for now; add one in `index.html` once the address is confirmed.

`www.dmbtgroup.com` redirects to `dmbtgroup.com` (same path). Any other address, such as a company link `dmbtgroup.com/cmtb`, forwards to the same address on
tactime.dmbtgroup.com (see `vercel.json`).

Pushing to `main` deploys to Vercel (`.github/workflows/deploy.yml`); it needs a `VERCEL_TOKEN` secret.
