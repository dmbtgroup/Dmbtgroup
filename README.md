# dmbtgroup.com

The DMBT website: an industrial engineering company page with links to DMBT's products.

- **TactLab** — lab and shop management: https://tactime.dmbtgroup.com
- **Domora** — condominium management: https://condo.dmbtgroup.com
- **TactHR** — HR and payroll management: https://tacthr.dmbtgroup.com

It is a static site (no build step): `index.html`, with styles, script and images in `assets/`.
Browsers keep files in `assets/` for a day, so after changing `site.css` or `site.js`, raise the `?v=` number
where `index.html` loads them.

**The logo.** The page opens on a screen with the DMBT logo alone in the middle. Scrolling down moves it
into the header corner, and scrolling back to the top (or clicking the header logo) brings it back to the
middle. On the first visit in a browser session the logo appears and the page then scrolls down by itself;
visitors can skip that with "Skip" or Esc. Later page loads in the same session, links to a section
(such as `#products`) and visitors who prefer reduced motion open straight on the content.

**Sections.** Header · logo screen · hero with a line-study drawing · the D-M-B-T principles · services · how we work ·
experts · industries · products · contact · footer.

**Experts.** Each expert is one `<article class="expert">` in the `#experts` section of `index.html`, with keys
`e1.*` for the first expert, `e2.*` for the next, and so on; add their French and Arabic text to `assets/site.js`.
Only professional details go on the site (no phone numbers, personal emails or dates of birth).

**Languages.** English, French or Arabic (right to left), following the visitor's browser language or the
EN / FR / ع switch in the header, which is remembered in a `lang` cookie. English text lives in
`index.html`; each translated element has a `data-i18n` key whose French and Arabic text is in
`assets/site.js`. To change wording, edit both places.

**Contact.** The contact section has no email button for now; add one in `index.html` once the address is confirmed.

`www.dmbtgroup.com` redirects to `dmbtgroup.com` (same path). Any other address, such as a company link `dmbtgroup.com/cmtb`, forwards to the same address on
tactime.dmbtgroup.com (see `vercel.json`).

Pushing to `main` deploys to Vercel (`.github/workflows/deploy.yml`); it needs a `VERCEL_TOKEN` secret.
