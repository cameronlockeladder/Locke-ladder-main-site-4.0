// All homepage content + SEO fields. The HomePageTemplate is fully data-driven from this object.
import { ROBOTS, SITE, SERVICE_REGIONS, REVIEWS } from "@/data/siteMeta";

export const homePageData = {
  seo: {
    canonical: `${SITE.baseUrl}/`,
    metaTitle: "Premium Roofing, Siding, Windows & Doors - Indianapolis & Chicago | Locke & Ladder",
    metaDescription:
      "Premium roofing, siding, windows, doors, gutters, and exterior decisions for high-end homes in Indianapolis and Chicago suburbs. Real costs, no pressure.",
    robots: ROBOTS,
    breadcrumb: [{ name: "Home", url: `${SITE.baseUrl}/` }],
    og: {
      type: "website",
      title: "Premium Roofing, Siding, Windows & Doors - Indianapolis & Chicago | Locke & Ladder",
      description:
        "Premium roofing, siding, windows, doors, gutters, and exterior decisions for high-end homes in Indianapolis and Chicago suburbs. Real costs, no pressure.",
      url: `${SITE.baseUrl}/`,
      image: SITE.defaultOgImage,
    },
  },

  hero: {
    eyebrow: "Indianapolis Metro · Western Chicago Suburbs",
    h1: "Because the details matter.",
    lead:
      "Locke & Ladder handles roofing, siding, windows, doors, gutters, storm claims, and commercial exterior work for high-end homes in the Indianapolis metro and the western Chicago suburbs.",
    image: {
      src: "/images/hero-home.jpg",
      alt: "High-end home exterior with a synthetic cedar shake roof, copper detailing, and crisp trim lines at dusk.",
      w: 1920,
      h: 1023,
    },
    primaryCta: { label: "Start with your project", href: "/start-here/" },
    secondaryCta: { label: "See real cost ranges", href: "/cost-scope-index/" },
    trustSignals: [
      "5.0 across 229 public reviews",
      "1,317 estimates analyzed",
      "Carmel & Burr Ridge offices",
      "Brava preferred",
      "Pella certified",
    ],
  },

  directAnswer: {
    eyebrow: "The exterior decision",
    label: "What we do, in one paragraph, for the people and the answer engines that read first.",
    lead:
      "Locke & Ladder is a premium exterior design and roofing firm serving the Indianapolis metro and the western Chicago suburbs. We handle roofing, siding, windows, doors, gutters, storm and insurance claims, and commercial exterior work.",
    body:
      "The exterior is not a single product. It protects the people inside, controls where water goes, holds the curb appeal of the home, and decides how the house performs over the next twenty years. Most homeowners come to us because they do not want a rushed quote or a thin answer. They want to understand the real scope, the material fit, and the cost before anyone starts selling.",
  },

  whatWeDo: {
    eyebrow: "What we do",
    heading: "Six exterior systems, one connected decision.",
    intro:
      "Every block below answers the real choice in front of you, not a list of products. The exterior works as one system, so we plan it that way.",
    image: {
      src: "/images/roofing-copper.jpg",
      alt: "Copper roof detail with clean standing seams and aged patina on a high-end home.",
      w: 1920,
      h: 1278,
    },
    services: [
      { n: "01", title: "Roofing", href: "/roofing/", body: "The roof is the system every other decision depends on. The real choice is not a shingle brand. It is ventilation, flashing, water paths, and how the material carries the architecture of the home. We specify Brava synthetic cedar, standing seam metal, slate, and architectural asphalt based on the house, not the markup." },
      { n: "02", title: "Windows & Doors", href: "/windows-doors/", body: "Windows decide how quiet, tight, and comfortable a house feels. The real choice is the frame, the glass package, the install detail, and the trim. Done correctly, the rooms go still and the drafts disappear. We are Pella certified." },
      { n: "03", title: "Siding", href: "/siding/", body: "Siding is the face of the house and its first line against water. The real choice is material, exposure, trim detail, and the lines that read from the street. We plan the shadow lines and transitions before a single board goes up." },
      { n: "04", title: "Gutters & Gutter Guards", href: "/gutters/", body: "Gutters stay quiet until they fail. The real choice is sizing, capacity, and a guard system matched to the roof and the trees around it. Undersized gutters move water into the wrong places. We size for the actual roof, not a default." },
      { n: "05", title: "Insurance Claims", href: "/start-here/", body: "Storm damage is a documentation problem before it is a roofing problem. You file the claim. We document the damage, meet the adjuster, review the scope, and explain what should be repaired or replaced. No storm chasing." },
      { n: "06", title: "Commercial Exterior Work", href: "/start-here/", body: "Commercial roofs and exteriors run on tighter tolerances and longer timelines. The real choice is the system, the logistics, and keeping the building open while the work happens. We scope flat roofs, churches, and mixed-use exteriors." },
    ],
  },

  costRanges: {
    eyebrow: "Real cost ranges",
    heading: "Planning ranges from 1,317 real estimates.",
    intro:
      "Median numbers from our active estimate data, shown before anyone visits your home. These are planning ranges, not final quotes. Your number depends on the real scope.",
    items: [
      { system: "Brava synthetic cedar roof", median: "118,133", value: 118133, note: "Middle range $97,908 to $126,063", n: 20 },
      { system: "Standing seam metal roof", median: "26,804", value: 26804, note: "Standing seam, premium architectural metal", n: 16 },
      { system: "Gutters & gutter guards", median: "19,358", value: 19358, note: "Sized to the actual roof", n: 337 },
      { system: "Windows & doors", median: "16,058", value: 16058, note: "Pella certified installs", n: 56 },
      { system: "Siding & exterior trim", median: "5,922", value: 5922, note: "Material and trim detail", n: 67 },
      { system: "Repair & leak diagnostic", median: "1,657", value: 1657, note: "Find the source, not the symptom", n: 48 },
    ],
    disclaimer:
      "The Locke & Ladder Cost & Scope Index is based on 1,317 sanitized active estimates dated January 1, 2025 or later. Customer information is removed. The numbers are planning ranges, not final quotes.",
    cta: { label: "See the full Cost & Scope Index", href: "/cost-scope-index/" },
  },

  howWeWork: {
    eyebrow: "How we work",
    heading: "The process runs before the pitch.",
    intro: "Same order, every project. It is how the scope stays honest and the work stays predictable.",
    steps: [
      { n: "01", title: "Listen first", body: "Before we measure anything, we listen to what the home needs and what you actually want to solve." },
      { n: "02", title: "Inspect the condition", body: "We get on the roof and into the details. Attic, flashing, water paths, and trim, including the parts most bids never look at." },
      { n: "03", title: "Specify the system", body: "We choose materials and details that fit the architecture, the climate, and how long you plan to stay." },
      { n: "04", title: "Price the real scope", body: "You get a number tied to the full scope, including the line items cheaper bids quietly leave out." },
      { n: "05", title: "Manage the work", body: "One team runs the job, keeps the site clean, and keeps you informed from tear-off to final walk." },
    ],
  },

  founder: {
    eyebrow: "Founder and ethos",
    heading: "A roofer who went to art school.",
    image: { src: "/images/jon-strand.webp", alt: "Jon Strand, founder of Locke & Ladder, presenting an exterior project plan.", w: 1920, h: 1279 },
    caption: "Jon Strand · Founder",
    paragraphs: [
      "Locke & Ladder was founded by Jon Strand, who learned roofing and construction while paying his way through the Herron School of Art in Indianapolis. That mix is the whole point. A trained eye for proportion, color, and shadow line, applied to a trade that usually ignores all three.",
      "The company was built against the things that frustrate high-end homeowners: vague quotes, pressure sales, missing scope, and poor communication. The answer was simple and hard. Explain the real decision, show the real scope, and do the work like the details matter.",
    ],
    quote:
      "Craft and design are not extras on a roof. They are the difference between a house that ages well and a house that just gets covered.",
  },

  projectProof: {
    eyebrow: "Project proof",
    heading: "Proof, in specifics.",
    intro: "The best proof is specific. Named people, real jobs, and concrete details, not slogans.",
    items: [
      { label: "Chosen after four bids", body: "A homeowner compared four bids before choosing Locke & Ladder. We were not the lowest. The clarity of the scope and the sales process is what won the work.", image: "/images/proof-hickman.webp", alt: "Brava synthetic cedar shake roof on a high-end home completed by Locke & Ladder.", w: 1920, h: 1438 },
      { label: "Caleb, on site every day", body: "On a siding project, Caleb came by every day to check progress and hold the work to spec. The owner always knew where the job stood.", image: "/images/siding-install.webp", alt: "Locke & Ladder crew installing siding on a residential exterior.", w: 1920, h: 1371 },
      { label: "Quieter, tighter, warmer", body: "On a window project, Jay and the team improved the energy efficiency and the quiet of the home. The owner noticed the rooms went still.", image: "/images/windows-install.webp", alt: "New windows installed by Locke & Ladder on a home exterior.", w: 1920, h: 1371 },
    ],
    rating: { graphic: "/brand/google-5-star.png", text: REVIEWS.ratingText },
    reviews: REVIEWS.quotes,
  },

  whereWeWork: {
    eyebrow: "Where we work",
    heading: "Two metros, one standard.",
    cta: { label: "See all service areas", href: "/service-areas/" },
    regions: SERVICE_REGIONS,
  },

  faq: {
    eyebrow: "Common questions",
    heading: "The questions buyers actually ask.",
    intro: "Straight answers to the hard ones, including cost, material fit, and what a real quote should contain.",
    items: [
      { q: "What does a Brava synthetic cedar roof cost?", a: "Based on our active estimate data, a Brava synthetic cedar roof has a median of $118,133, with a middle range of $97,908 to $126,063 across twenty recent estimates. The final number depends on roof size, pitch, access, flashing, and the rest of the system. Treat this as a planning range, not a final quote." },
      { q: "When is Brava worth it?", a: "Brava is worth considering when the home deserves the character of cedar or slate but the owner wants lower maintenance and a longer material life than traditional wood shake. It holds heavy texture and shadow lines while resisting the rot, insects, and weathering that age real cedar." },
      { q: "Is Locke & Ladder the cheapest contractor?", a: "Usually not. A cheaper bid often leaves out flashing, ventilation, tear-off assumptions, trim, correct gutter sizing, supervision, or cleanup. We price the real scope, so the number you see is the number that finishes the job correctly." },
      { q: "Which roofing material is best for a high-end home?", a: "There is no single best material. The right choice depends on the architecture of the home, the budget, the performance you need, and how long you plan to stay. We walk through those tradeoffs before recommending a system." },
      { q: "Do you handle insurance claims?", a: "You file the claim. We document the damage, meet the adjuster, review the scope, and explain what should be repaired or replaced. You stay in control of the claim while we make sure the scope reflects the real condition of the exterior." },
      { q: "Do you only do roofing?", a: "No. We handle roofing, siding, windows, doors, gutters, gutter guards, soffit, fascia, trim, insurance claims, and commercial exterior work. The exterior is one connected system, so we look at how the parts work together." },
      { q: "What should a homeowner look for in a contractor quote?", a: "A complete quote names materials and quantities, flashing details, the ventilation plan, tear-off assumptions, exclusions, warranty information, project management expectations, and cleanup standards. It should read like a specification, not a single line." },
      { q: "What makes a quote incomplete?", a: "An incomplete quote gives only a product name and a total price. It hides the scope, which is exactly where cost, performance, and risk actually live." },
    ],
  },

  finalCta: {
    eyebrow: "Start here",
    heading: "Start with the question that matters most.",
    lead:
      "Cost, material, scope, or timing. Pick the one keeping you up and we will give you a straight answer, before anyone tries to sell you anything.",
    image: { src: "/images/snape-aerial.jpg", alt: "Aerial view of a high-end home exterior completed by Locke & Ladder.", w: 1920, h: 1004 },
    ctas: [
      { label: "See cost ranges", href: "/cost-scope-index/", variant: "secondary" },
      { label: "Start here", href: "/start-here/", variant: "primary" },
    ],
  },
};

export default homePageData;
