// Roofing service page content + SEO. This is the first real instance of ServicePageTemplate.
// To add a new service page later, copy this file (for example windows-doors.js), update the
// fields, and register it in src/data/servicePages/index.js. Do not put copy in the template.
import { ROBOTS, SITE, SERVICE_REGIONS, REVIEWS } from "@/data/siteMeta";

export const roofing = {
  slug: "roofing",
  title: "Roofing",

  seo: {
    canonical: `${SITE.baseUrl}/roofing/`,
    metaTitle: "Roofing for High-End Homes - Brava, Standing Seam, Slate | Locke & Ladder",
    metaDescription:
      "Roofing is a system, not a shingle. Locke & Ladder plans ventilation, flashing, water paths, and material fit for high-end homes in Indianapolis and Chicago suburbs.",
    robots: ROBOTS,
    breadcrumb: [
      { name: "Home", url: `${SITE.baseUrl}/` },
      { name: "Roofing", url: `${SITE.baseUrl}/roofing/` },
    ],
    og: {
      type: "website",
      title: "Roofing for High-End Homes - Brava, Standing Seam, Slate | Locke & Ladder",
      description:
        "Roofing is a system, not a shingle. Locke & Ladder plans ventilation, flashing, water paths, and material fit for high-end homes in Indianapolis and Chicago suburbs.",
      url: `${SITE.baseUrl}/roofing/`,
      image: `${SITE.baseUrl}/images/brava-hickman.jpg`,
    },
  },

  schema: {
    serviceName: "Roofing",
    serviceType: "Roofing",
    description:
      "Premium residential and commercial roofing for high-end homes, including Brava synthetic cedar, standing seam metal, architectural asphalt, and slate-style systems, with full attention to ventilation, flashing, and water paths.",
  },

  hero: {
    eyebrow: "Roofing",
    h1: "Roofing that respects the whole house.",
    // Direct answer lives in the first 150 words for answer-engine extraction.
    directAnswer:
      "Roofing is not just choosing a shingle. The roof is a system. It is the deck it sits on, the ventilation that lets it breathe, the flashing that seals every edge and penetration, the water paths that carry rain off the house, the material that fits the architecture, and the supervision that holds the install to spec. Locke & Ladder plans that whole system for high-end homes in the Indianapolis metro and the western Chicago suburbs. We specify Brava synthetic cedar, standing seam metal, architectural asphalt, and slate-style systems based on the home, then price the real scope so nothing important is hidden.",
    image: { src: "/images/brava-hickman.jpg", alt: "Brava synthetic cedar shake roof on a high-end home, with deep texture and clean ridge lines.", w: 1920, h: 1278 },
    primaryCta: { label: "Start with your roof", href: "/start-here/" },
    secondaryCta: { label: "See roof cost ranges", href: "/cost-scope-index/" },
  },

  decision: {
    eyebrow: "The real decision",
    heading: "Roofing is a system, not a shingle.",
    intro:
      "A roof fails at the details long before the field. The material is only one input. The decision is how every part works together to keep water out and let the structure breathe.",
    factors: [
      { title: "Ventilation", body: "Intake and exhaust balanced so the deck stays dry and the attic does not cook the shingles from below." },
      { title: "Flashing", body: "Every edge, valley, wall, and penetration sealed correctly. Flashing is where most leaks actually start." },
      { title: "Water paths", body: "Where the water goes once it lands, from field to valley to gutter, planned before the material is chosen." },
      { title: "Deck condition", body: "The surface under the roof. We check it before pricing, because a soft deck changes the scope." },
      { title: "Roof geometry", body: "Pitch, dormers, hips, and transitions decide how a material reads and how hard it is to install correctly." },
      { title: "Architectural fit", body: "How the material carries the lines of the house. The right roof belongs to the home it sits on." },
    ],
  },

  materials: {
    eyebrow: "Materials",
    heading: "Materials, and when they make sense.",
    intro: "No single material is best. Each one fits a different home, budget, and timeline. Here is the honest tradeoff.",
    options: [
      { name: "Brava synthetic cedar", when: "When the home deserves the character of cedar or slate, but the owner wants lower maintenance and a longer material life than wood shake.", tradeoff: "Higher upfront cost than asphalt. In return, heavy texture and shadow lines that resist rot, insects, and weathering." },
      { name: "Standing seam metal", when: "For clean, modern, and architectural rooflines, or low-slope sections where seams need to stand above the water.", tradeoff: "A premium material and install. It rewards simple geometry and pays back in longevity and a crisp, quiet profile." },
      { name: "Architectural asphalt", when: "When the priority is a strong, proven roof at a sensible budget without specialty character.", tradeoff: "Shorter material life than Brava, metal, or slate, but a dependable system when detailed and ventilated correctly." },
      { name: "Slate and slate-style systems", when: "For historic or formal homes where natural stone or a slate-like profile is the right architectural answer.", tradeoff: "Weight, cost, and structural review matter. We confirm the home and budget support it before recommending it." },
    ],
  },

  cost: {
    eyebrow: "Cost and scope",
    heading: "A roof cost snapshot.",
    intro: "Median numbers from our active estimate data. These are planning ranges, not final quotes. Your roof depends on size, pitch, access, and the rest of the system.",
    items: [
      { system: "Brava synthetic cedar roof", median: "118,133", value: 118133, note: "Middle range $97,908 to $126,063", n: 20 },
      { system: "Standing seam metal roof", median: "26,804", value: 26804, note: "Premium architectural metal", n: 16 },
      { system: "Repair & leak diagnostic", median: "1,657", value: 1657, note: "Find the source before pricing a fix", n: 48 },
    ],
    disclaimer:
      "These roofing medians are drawn from the Locke & Ladder Cost & Scope Index, based on 1,317 sanitized active estimates dated January 1, 2025 or later. Customer information is removed. The numbers are planning ranges, not final quotes.",
    cta: { label: "See the full Cost & Scope Index", href: "/cost-scope-index/" },
  },

  inspect: {
    eyebrow: "Before we price",
    heading: "What we inspect before we price.",
    intro: "A real number comes from a real look. We check the things a drive-by bid never sees.",
    items: [
      { title: "Attic", body: "Insulation, daylight, moisture, and signs the deck has been working too hard." },
      { title: "Ventilation", body: "Whether intake and exhaust are balanced, or quietly shortening the life of the roof." },
      { title: "Flashing", body: "Walls, edges, steps, and counterflashing. The usual source of a leak." },
      { title: "Chimneys and penetrations", body: "Every place something passes through the roof and has to be sealed." },
      { title: "Valleys and water paths", body: "Where water concentrates and where it is most likely to fail." },
      { title: "Deck condition", body: "The surface under the shingles, checked for soft spots and rot." },
      { title: "Gutters and drainage", body: "Whether the water that leaves the roof is actually carried away from the house." },
      { title: "Access and site protection", body: "How we reach the roof and protect the landscaping, windows, and grounds during the work." },
    ],
  },

  proof: {
    eyebrow: "Project proof",
    heading: "Proof, on a real roof.",
    intro: "Specific work, named people, concrete outcomes. No invented results.",
    items: [
      { label: "Brava shake, finished in six days", body: "On the Hickman roof, the work began with a full attic inspection and ran with Caleb on site every day. Brava synthetic shake, started exactly when promised, finished in six days.", image: "/images/proof-hickman.webp", alt: "Completed Brava synthetic cedar shake roof on the Hickman home.", w: 1920, h: 1438 },
      { label: "Documented for the adjuster", body: "Locke & Ladder documented the damage and helped the homeowners secure thousands in insurance funds they would not have pursued on their own.", image: "/images/roof-dormer.jpg", alt: "Dormer and roofline detail showing flashing and shingle transitions.", w: 1920, h: 1450 },
    ],
    rating: { graphic: "/brand/google-5-star.png", text: REVIEWS.ratingText },
    reviews: REVIEWS.quotes,
  },

  faq: {
    eyebrow: "Roofing questions",
    heading: "What homeowners ask about roofs.",
    intro: "The questions that actually decide a roofing project.",
    items: [
      { q: "What does a Brava roof cost?", a: "Based on our active estimate data, a Brava synthetic cedar roof has a median of $118,133, with a middle range of $97,908 to $126,063 across twenty recent estimates. The final number depends on roof size, pitch, access, flashing, and the rest of the system. Treat this as a planning range, not a final quote." },
      { q: "When is Brava worth it?", a: "Brava is worth considering when the home deserves the character of cedar or slate but the owner wants lower maintenance and a longer material life than traditional wood shake. It holds heavy texture and shadow lines while resisting the rot, insects, and weathering that age real cedar." },
      { q: "Why are roof bids so different?", a: "Because two bids can describe completely different work. One may include flashing, ventilation, tear-off, trim, correct gutter sizing, supervision, and cleanup, while another quietly leaves several of those out. The price gap is usually a scope gap, not a discount." },
      { q: "What makes a roof quote incomplete?", a: "An incomplete quote gives only a product name and a total price. A complete one names materials and quantities, flashing details, the ventilation plan, tear-off assumptions, exclusions, warranty information, project management, and cleanup standards." },
      { q: "Do you handle insurance claims?", a: "You file the claim. We document the damage, meet the adjuster, review the scope, and explain what should be repaired or replaced. You stay in control of the claim while we make sure the scope reflects the real condition of the roof." },
      { q: "How do I know if I need repair or replacement?", a: "It depends on the age of the roof, how widespread the damage is, the condition of the deck, and whether the system can be reliably restored. A repair and leak diagnostic visit, with a median around $1,657, often answers the question before you commit to anything larger." },
    ],
  },

  areas: {
    eyebrow: "Where we work",
    heading: "Where we roof.",
    cta: { label: "See all service areas", href: "/service-areas/" },
    regions: SERVICE_REGIONS,
  },

  related: {
    eyebrow: "The rest of the exterior",
    heading: "Roofing connects to the rest of the system.",
    services: [
      { label: "Windows & Doors", href: "/windows-doors/" },
      { label: "Siding", href: "/siding/" },
      { label: "Gutters & Gutter Guards", href: "/gutters/" },
    ],
  },

  finalCta: {
    eyebrow: "Start here",
    heading: "Start with your roof, not a sales pitch.",
    lead: "Tell us the roof you have and the home it sits on. We will walk the real scope before anyone talks price.",
    image: { src: "/images/roof-chimney.jpg", alt: "Steep roof with chimney, valley, and flashing detail on a high-end home.", w: 1920, h: 1979 },
    ctas: [
      { label: "See roof cost ranges", href: "/cost-scope-index/", variant: "secondary" },
      { label: "Start with your roof", href: "/start-here/", variant: "primary" },
    ],
  },
};

export default roofing;
