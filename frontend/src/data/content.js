// Single source of truth for all visible homepage content.
// The FAQ answers below must stay identical to the FAQPage JSON-LD in public/index.html.

export const NAP = {
  brand: "Locke & Ladder",
  email: "info@lockeladder.com",
  phone: "317-662-2169",
  phoneHref: "tel:+13176622169",
  offices: [
    {
      label: "Carmel office",
      lines: ["3077 E 98th St, Suite 275", "Carmel, IN 46280"],
      phone: "317-662-2169",
      phoneHref: "tel:+13176622169",
    },
    {
      label: "Burr Ridge office",
      lines: ["8004 S Madison St", "Burr Ridge, IL 60527"],
      phone: "708-859-6942",
      phoneHref: "tel:+17088596942",
    },
  ],
  hours: [
    { day: "Monday to Friday", time: "8:00am to 6:30pm" },
    { day: "Saturday", time: "10:00am to 5:00pm" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const NAV_LINKS = [
  { label: "Roofing", href: "/roofing/" },
  { label: "Windows & Doors", href: "/windows-doors/" },
  { label: "Siding", href: "/siding/" },
  { label: "Gutters", href: "/gutters/" },
  { label: "Cost & Scope", href: "/cost-scope-index/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Project Proof", href: "/project-proof/" },
];

export const TRUST_SIGNALS = [
  "5.0 across 229 public reviews",
  "1,317 estimates analyzed",
  "Carmel & Burr Ridge offices",
  "Brava preferred",
  "Pella certified",
];

export const SERVICES = [
  {
    n: "01",
    title: "Roofing",
    body: "The roof is the system every other decision depends on. The real choice is not a shingle brand. It is ventilation, flashing, water paths, and how the material carries the architecture of the home. We specify Brava synthetic cedar, standing seam metal, slate, and architectural asphalt based on the house, not the markup.",
  },
  {
    n: "02",
    title: "Windows & Doors",
    body: "Windows decide how quiet, tight, and comfortable a house feels. The real choice is the frame, the glass package, the install detail, and the trim. Done correctly, the rooms go still and the drafts disappear. We are Pella certified.",
  },
  {
    n: "03",
    title: "Siding",
    body: "Siding is the face of the house and its first line against water. The real choice is material, exposure, trim detail, and the lines that read from the street. We plan the shadow lines and transitions before a single board goes up.",
  },
  {
    n: "04",
    title: "Gutters & Gutter Guards",
    body: "Gutters stay quiet until they fail. The real choice is sizing, capacity, and a guard system matched to the roof and the trees around it. Undersized gutters move water into the wrong places. We size for the actual roof, not a default.",
  },
  {
    n: "05",
    title: "Insurance Claims",
    body: "Storm damage is a documentation problem before it is a roofing problem. You file the claim. We document the damage, meet the adjuster, review the scope, and explain what should be repaired or replaced. No storm chasing.",
  },
  {
    n: "06",
    title: "Commercial Exterior Work",
    body: "Commercial roofs and exteriors run on tighter tolerances and longer timelines. The real choice is the system, the logistics, and keeping the building open while the work happens. We scope flat roofs, churches, and mixed-use exteriors.",
  },
];

export const COSTS = [
  { system: "Brava synthetic cedar roof", median: "118,133", note: "Middle range $97,908 to $126,063", n: 20 },
  { system: "Standing seam metal roof", median: "26,804", note: "Standing seam, premium architectural metal", n: 16 },
  { system: "Gutters & gutter guards", median: "19,358", note: "Sized to the actual roof", n: 337 },
  { system: "Windows & doors", median: "16,058", note: "Pella certified installs", n: 56 },
  { system: "Siding & exterior trim", median: "5,922", note: "Material and trim detail", n: 67 },
  { system: "Repair & leak diagnostic", median: "1,657", note: "Find the source, not the symptom", n: 48 },
];

export const COST_DISCLAIMER =
  "The Locke & Ladder Cost & Scope Index is based on 1,317 sanitized active estimates dated January 1, 2025 or later. Customer information is removed. The numbers are planning ranges, not final quotes.";

export const STEPS = [
  { n: "01", title: "Listen first", body: "Before we measure anything, we listen to what the home needs and what you actually want to solve." },
  { n: "02", title: "Inspect the condition", body: "We get on the roof and into the details. Attic, flashing, water paths, and trim, including the parts most bids never look at." },
  { n: "03", title: "Specify the system", body: "We choose materials and details that fit the architecture, the climate, and how long you plan to stay." },
  { n: "04", title: "Price the real scope", body: "You get a number tied to the full scope, including the line items cheaper bids quietly leave out." },
  { n: "05", title: "Manage the work", body: "One team runs the job, keeps the site clean, and keeps you informed from tear-off to final walk." },
];

export const PROOF = [
  {
    label: "Chosen after four bids",
    body: "A homeowner compared four bids before choosing Locke & Ladder. We were not the lowest. The clarity of the scope and the sales process is what won the work.",
    image: "/images/proof-hickman.webp",
    alt: "Brava synthetic cedar shake roof on a high-end home completed by Locke & Ladder.",
    w: 1920,
    h: 1438,
  },
  {
    label: "Caleb, on site every day",
    body: "On a siding project, Caleb came by every day to check progress and hold the work to spec. The owner always knew where the job stood.",
    image: "/images/siding-install.webp",
    alt: "Locke & Ladder crew installing siding on a residential exterior.",
    w: 1920,
    h: 1371,
  },
  {
    label: "Quieter, tighter, warmer",
    body: "On a window project, Jay and the team improved the energy efficiency and the quiet of the home. The owner noticed the rooms went still.",
    image: "/images/windows-install.webp",
    alt: "New windows installed by Locke & Ladder on a home exterior.",
    w: 1920,
    h: 1371,
  },
];

export const REVIEW_QUOTES = [
  {
    quote:
      "From the first attic inspection to the final day, Locke & Ladder gave us complete confidence. They started exactly when promised, finished in six days, and helped us secure thousands in insurance funds we never would have pursued on our own. Top shelf.",
    author: "Gilda Hickman",
  },
  {
    quote: "My satisfaction level hasn't changed in 9 years.",
    author: "Amy, Michigan",
  },
];

export const REGIONS = [
  {
    region: "Indiana",
    label: "Indianapolis metro",
    cities: ["Carmel", "Fishers", "Westfield", "Zionsville", "Noblesville", "Geist", "Indianapolis", "Hamilton County"],
  },
  {
    region: "Illinois",
    label: "Western Chicago suburbs",
    cities: ["Hinsdale", "Burr Ridge", "Oak Brook", "Western Springs", "Clarendon Hills", "La Grange", "Downers Grove", "Naperville"],
  },
];

export const FAQS = [
  {
    q: "What does a Brava synthetic cedar roof cost?",
    a: "Based on our active estimate data, a Brava synthetic cedar roof has a median of $118,133, with a middle range of $97,908 to $126,063 across twenty recent estimates. The final number depends on roof size, pitch, access, flashing, and the rest of the system. Treat this as a planning range, not a final quote.",
  },
  {
    q: "When is Brava worth it?",
    a: "Brava is worth considering when the home deserves the character of cedar or slate but the owner wants lower maintenance and a longer material life than traditional wood shake. It holds heavy texture and shadow lines while resisting the rot, insects, and weathering that age real cedar.",
  },
  {
    q: "Is Locke & Ladder the cheapest contractor?",
    a: "Usually not. A cheaper bid often leaves out flashing, ventilation, tear-off assumptions, trim, correct gutter sizing, supervision, or cleanup. We price the real scope, so the number you see is the number that finishes the job correctly.",
  },
  {
    q: "Which roofing material is best for a high-end home?",
    a: "There is no single best material. The right choice depends on the architecture of the home, the budget, the performance you need, and how long you plan to stay. We walk through those tradeoffs before recommending a system.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "You file the claim. We document the damage, meet the adjuster, review the scope, and explain what should be repaired or replaced. You stay in control of the claim while we make sure the scope reflects the real condition of the exterior.",
  },
  {
    q: "Do you only do roofing?",
    a: "No. We handle roofing, siding, windows, doors, gutters, gutter guards, soffit, fascia, trim, insurance claims, and commercial exterior work. The exterior is one connected system, so we look at how the parts work together.",
  },
  {
    q: "What should a homeowner look for in a contractor quote?",
    a: "A complete quote names materials and quantities, flashing details, the ventilation plan, tear-off assumptions, exclusions, warranty information, project management expectations, and cleanup standards. It should read like a specification, not a single line.",
  },
  {
    q: "What makes a quote incomplete?",
    a: "An incomplete quote gives only a product name and a total price. It hides the scope, which is exactly where cost, performance, and risk actually live.",
  },
];
