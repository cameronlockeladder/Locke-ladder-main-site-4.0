// Global site metadata, NAP, and navigation. Source of truth for brand + contact.
// NAP values are carried over verbatim from the original content.js.

// Robots policy.
// STAGING/PROTOTYPE default is noindex,nofollow so this preview is never indexed.
// For PRODUCTION launch, set ROBOTS = ROBOTS_PRODUCTION (see TEMPLATE_HANDOFF.md).
export const ROBOTS_STAGING = "noindex,nofollow";
export const ROBOTS_PRODUCTION = "index,follow";
export const ROBOTS = ROBOTS_STAGING;

export const SITE = {
  name: "Locke & Ladder",
  baseUrl: "https://lockeladder.com",
  email: "info@lockeladder.com",
  phone: "317-662-2169",
  phoneHref: "tel:+13176622169",
  defaultOgImage: "https://lockeladder.com/images/hero-home.jpg",
  locale: "en-US",
};

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
      locality: "Carmel",
      region: "IN",
      postalCode: "46280",
      street: "3077 E 98th St, Suite 275",
    },
    {
      label: "Burr Ridge office",
      lines: ["8004 S Madison St", "Burr Ridge, IL 60527"],
      phone: "708-859-6942",
      phoneHref: "tel:+17088596942",
      locality: "Burr Ridge",
      region: "IL",
      postalCode: "60527",
      street: "8004 S Madison St",
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

// Cities used for both the visible "Where We Work" lists and schema areaServed.
export const SERVICE_REGIONS = [
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

// Approved public review data. ratingValue/reviewCount appear visibly on the page
// (hero trust signal + proof block) and must stay in sync with schema.
export const REVIEWS = {
  ratingValue: "5.0",
  reviewCount: "229",
  ratingText: "5.0 across 229 public reviews",
  quotes: [
    {
      quote:
        "From the first attic inspection to the final day, Locke & Ladder gave us complete confidence. They started exactly when promised, finished in six days, and helped us secure thousands in insurance funds we never would have pursued on our own. Top shelf.",
      author: "Gilda Hickman",
    },
    {
      quote: "My satisfaction level hasn't changed in 9 years.",
      author: "Amy, Michigan",
    },
  ],
};
