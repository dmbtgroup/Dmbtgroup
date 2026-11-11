// ARTRA product details — one entry per art piece.
// Each field matches a question on the "ARTRA Product Detail" Google Form, in the same order, so a form
// response can be copied straight in. Leave a field as "" until it is known: empty fields are not shown.
//
//   key          which animated drawing to show when there is no photo (vase, box, tray, lantern, mirror, carpet);
//                leave it "" for a piece shown from its photo
//   slug         the piece's address, /royal/piece?p=<slug> (optional; otherwise made from key, ID or name)
//   name         Product Name
//   category     Product Category
//   id           Product ID
//   photo        Photo link (a direct link to the high-quality image; replaces the drawing)
//   cutout       optional: the same photo with its background removed (PNG or WebP with transparency); when set,
//                the pages show it in place of the photo, and keep the full photo for the close-up
//   artist       Artist
//   origin       Origin of art piece (City / Country)
//   history      Art Piece history
//   description  Description
//   medium       Medium
//   dimensions   Dimensions (weight, height, width, depth)
//   packaging    Packaging Dimensions
//   additional   Additional Information
//   care         Care Instructions
//   returns      Returns and Exchanges
//   updated      Last update date
//
// The form's "Document Provider name" and "Date of document creation" are internal and are not shown on the site.
// The text below is sample wording for the six drawn pieces; replace it with the real form responses.
window.ARTRA_PRODUCTS = [
  {
    // A real piece, shown from its photo. Fill in the empty fields from its form response.
    key: "",
    slug: "engraved-lidded-vase",
    name: "Engraved Lidded Vase",
    category: "Engraved metal",
    id: "",
    photo: "/royal/photos/engraved-lidded-vase.jpg",
    cutout: "/royal/photos/engraved-lidded-vase-cutout.webp",
    artist: "",
    origin: "",
    history: "Ghalamzani is the engraving of metal with a small hammer and fine steel chisels, a craft long associated with the bazaars of Isfahan. The pattern is drawn onto the metal, then cut into it line by line, so that light catches every stroke.",
    description: "A lidded vase on a slender stem, chased all over with arabesques and floral medallions. The main panels are picked out in gold tone against the silver-toned metal, and a tall finial crowns the domed lid.",
    medium: "Hand-engraved metal, two-tone finish",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Dust with a soft dry cloth and handle by the base, not the lid or finial. Avoid abrasive polish, which wears down the engraving and the gold-toned panels; keep away from damp.",
    returns: "",
    updated: ""
  },
  {
    key: "vase",
    name: "The Sovereign Vase",
    category: "Gilded enamel",
    id: "",
    photo: "",
    artist: "",
    origin: "",
    history: "Enamelling on copper (minakari) has been practised in Persia for centuries and is centred today in Isfahan. Colours are painted on as ground glass and fixed by firing, layer after layer.",
    description: "Raised from a single sheet of copper, fired in enamel several times and banded with burnished gold leaf. The pattern turns all the way round without a seam.",
    medium: "Copper, vitreous enamel, gold leaf",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Dust with a soft dry cloth. Keep away from knocks and sudden changes of temperature; do not use water or polish.",
    returns: "",
    updated: ""
  },
  {
    key: "box",
    name: "The Treasury Casket",
    category: "Khatam inlay",
    id: "",
    photo: "",
    artist: "",
    origin: "",
    history: "Khatam is Persian marquetry: rods of wood, bone and metal are bundled into a star pattern, glued, then sliced into thin sheets and laid onto the object. Shiraz and Isfahan are its best-known centres.",
    description: "A casket covered in khatam stars, banded and fitted in gold-toned brass. Lift the lid and the lining glows like a lamp.",
    medium: "Wood, bone, brass (khatam)",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Keep out of direct sun and away from heaters and damp. Dust with a soft brush; never soak or use solvents.",
    returns: "",
    updated: ""
  },
  {
    key: "tray",
    name: "The Court Tray",
    category: "Engraved brass",
    id: "",
    photo: "",
    artist: "",
    origin: "",
    history: "Ghalamzani is the engraving of metal with a small hammer and steel chisels, a craft long associated with the bazaars of Isfahan.",
    description: "A round tray chased ring within ring with leaves and stars, until the brass catches light like water.",
    medium: "Hand-engraved brass",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Wipe with a soft dry cloth. Avoid abrasive polish, which wears down the engraving.",
    returns: "",
    updated: ""
  },
  {
    key: "lantern",
    name: "The Vigil Lantern",
    category: "Silver filigree",
    id: "",
    photo: "",
    artist: "",
    origin: "",
    history: "Filigree (malileh) is built from fine twisted silver wire soldered into open lace-like patterns; the city of Zanjan is especially known for it.",
    description: "Silver wire twisted by hand into vines and teardrops, then gilded, so candlelight falls through it as lace.",
    medium: "Silver filigree, gilding",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Handle by the frame, not the wire work. Store wrapped in acid-free tissue to slow tarnish; clean only with a soft brush.",
    returns: "",
    updated: ""
  },
  {
    key: "mirror",
    name: "The Hall of Light",
    category: "Mirror mosaic",
    id: "",
    photo: "",
    artist: "",
    origin: "",
    history: "Mirror work (ayeneh-kari) sets small hand-cut pieces of mirror into plaster so that a single light is scattered across a room, as in the halls of Persian palaces and shrines.",
    description: "Hundreds of hand-cut mirror facets set in gilded plaster, each angled a little differently.",
    medium: "Mirror glass on plaster, gilding",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Hang on a solid wall away from damp. Dust gently with a soft dry brush; do not spray cleaners onto the piece.",
    returns: "",
    updated: ""
  },
  {
    key: "carpet",
    name: "The Throne Rug",
    category: "Hand-knotted silk",
    id: "",
    photo: "",
    artist: "",
    origin: "",
    history: "Hand-knotted Persian silk rugs are tied knot by knot on a vertical loom; Qom and Nain are among the towns renowned for them.",
    description: "Silk on a silk foundation in deep red, indigo and gold, with a central medallion and gilded corners.",
    medium: "Hand-knotted silk",
    dimensions: "",
    packaging: "",
    additional: "",
    care: "Keep out of strong sunlight and turn it now and then so it fades evenly. Have it cleaned only by a rug specialist.",
    returns: "",
    updated: ""
  }
];
