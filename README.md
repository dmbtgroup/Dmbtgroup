# dmbtgroup.com

The DMBT website: an industrial engineering company page with links to DMBT's products.

- **TactLab** — lab and shop management: https://tactime.dmbtgroup.com
- **Domora** — condominium management: https://condo.dmbtgroup.com
- **tactHR** — HR and payroll management: https://tacthr.dmbtgroup.com

It is a static site (no build step): `index.html`, with styles, script and images in `assets/`.
Browsers keep files in `assets/` for a day, so after changing `site.css` or `site.js`, raise the `?v=` number
where `index.html` loads them.

**The logo.** The page opens on a screen with the DMBT logo alone in the middle. Scrolling down moves it
into the header corner, and scrolling back to the top (or clicking the header logo) brings it back to the
middle. On the first visit in a browser session the logo appears and the page then scrolls down by itself;
visitors can skip that with "Skip" or Esc. Later page loads in the same session, links to a section
(such as `#products`) and visitors who prefer reduced motion open straight on the content.

**Sections.** Header · logo screen · hero with a line-study drawing · the D-M-B-T principles · services · how we work ·
industries · products · contact · footer.

**Experts page.** `experts.html` (served at `dmbtgroup.com/experts`) lists the experts as cards. "View CV"
opens an overlay with the expert's full profile and CV and a "Back to experts" button; each overlay has its own
address, such as `dmbtgroup.com/experts#hadi-shirouyehzad`. To add an expert, add a card and a
`<div class="sheet">` overlay in `experts.html` (keys `e2.*` for the second expert, and so on), their French and
Arabic text in `assets/site.js`, their full CV in `assets/cv.js`, and a square photo in `assets/experts/`.
Only professional details go on the site (no phone numbers, personal emails or dates of birth).

**Languages.** English, French or Arabic (right to left), following the visitor's browser language or the
EN / FR / ع switch in the header, which is remembered in a `lang` cookie. English text lives in
`index.html`; each translated element has a `data-i18n` key whose French and Arabic text is in
`assets/site.js`. To change wording, edit both places.

**Contact.** The contact band shows sales@dmbtgroup.com and +1 647 873 9585 and has a discovery-call form
(name, company, country, what to improve). The site has no server, so the form opens the visitor's email app
with the request addressed to sales@dmbtgroup.com; to receive requests without that step, connect it to a form
service. The footer repeats the contact details (with support@dmbtgroup.com) and links to every section and
the three product sites.

`www.dmbtgroup.com` redirects to `dmbtgroup.com` (same path). Any other address (apart from `/experts`), such as a company link `dmbtgroup.com/cmtb`, forwards to the same address on
tactime.dmbtgroup.com (see `vercel.json`).

The product cards show each app's logo mark from `assets/products/` (taken from the apps' own repositories).

Pushing to `main` deploys to Vercel (`.github/workflows/deploy.yml`); it needs a `VERCEL_TOKEN` secret.

**ARTRA — royal handicrafts pages.** `royal/` (served at `dmbtgroup.com/royal`) is a standalone site for ARTRA, a
showcase of royal handicraft pieces in gold, dark gray, dark beige and black. It shares nothing with the DMBT pages,
so it can move to its own domain as is.

- `royal/index.html` — the collection: hero, the pieces, a showcase that turns through them, the craft, and a commission form.
- `royal/piece.html` — one piece's own page, at `dmbtgroup.com/royal/piece?p=vase`: a full-screen hero, the description
  lit word by word as you scroll, the story (heritage, artist and origin, material) with the piece pinned beside it,
  a full-screen close-up, the specifications sheet, care and returns, other pieces, and an enquiry. A bar with the
  piece's name, its sections and "Enquire" follows the visitor down the page.
- `royal/products.js` — the product details, one entry per piece. Its fields follow the "ARTRA Product Detail" Google
  Form question by question (name, category, ID, photo link, artist, origin, history, description, medium, dimensions,
  packaging dimensions, additional information, care, returns, last update); copy a form response into an entry.
  Empty fields and the sections that depend on them are not shown, and the form's internal fields (document provider,
  creation date) stay off the site. The sample wording there should be replaced with the real responses.
- `royal/art.js` — the six animated drawings (the enamel vase turns, the inlaid casket opens, the brass tray's
  engraving rotates, the filigree lantern swings, the mirror mosaic glints, the silk rug weaves itself), and `EMAIL`,
  the address enquiries and commission requests open in the visitor's email app.

A piece with a photo link shows its photo in the hero and close-up (Google Drive links work if the file is shared
with "Anyone with the link"); a new entry without a `key` uses its photo everywhere and gets its own card. Animations
stop off screen and are switched off for visitors who prefer reduced motion. After changing a file in `royal/`,
raise its `?v=` number where the pages load it.
