// Pure JSON-LD builder functions. These keep schema generation in one place so the data
// can be ported into a static or SSR head later (see TEMPLATE_HANDOFF.md).
// Rule: only emit claims that are also visible on the page.
import { SITE, NAP, SERVICE_REGIONS, REVIEWS } from "@/data/siteMeta";

const BUSINESS_ID = `${SITE.baseUrl}/#business`;
const WEBSITE_ID = `${SITE.baseUrl}/#website`;

const areaServed = () =>
  SERVICE_REGIONS.flatMap((r) => r.cities.map((c) => ({ "@type": "City", name: `${c}, ${r.region === "Indiana" ? "IN" : "IL"}` })));

// RoofingContractor / LocalBusiness / HomeAndConstructionBusiness reference node.
export function buildLocalBusiness() {
  const main = NAP.offices[0];
  return {
    "@type": ["RoofingContractor", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: SITE.name,
    url: `${SITE.baseUrl}/`,
    email: SITE.email,
    telephone: "+1-317-662-2169",
    image: SITE.defaultOgImage,
    priceRange: "$$$",
    description:
      "Premium exterior design and roofing firm for high-end homes in the Indianapolis metro and the western Chicago suburbs. Roofing, siding, windows, doors, gutters, insurance claims, and commercial exterior work.",
    address: {
      "@type": "PostalAddress",
      streetAddress: main.street,
      addressLocality: main.locality,
      addressRegion: main.region,
      postalCode: main.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
    ],
    areaServed: areaServed(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.ratingValue,
      reviewCount: REVIEWS.reviewCount,
      bestRating: "5",
    },
    review: REVIEWS.quotes.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.quote,
    })),
  };
}

export function buildBranch() {
  const b = NAP.offices[1];
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE.baseUrl}/#burr-ridge`,
    name: `${SITE.name} - ${b.label}`,
    branchOf: { "@id": BUSINESS_ID },
    telephone: "+1-708-859-6942",
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.street,
      addressLocality: b.locality,
      addressRegion: b.region,
      postalCode: b.postalCode,
      addressCountry: "US",
    },
  };
}

export function buildWebSite() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE.baseUrl}/`,
    name: SITE.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: SITE.locale,
  };
}

export function buildWebPage({ url, name, description, image, breadcrumbId }) {
  const node = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: SITE.locale,
  };
  if (image) node.primaryImageOfPage = image;
  if (breadcrumbId) node.breadcrumb = { "@id": breadcrumbId };
  return node;
}

export function buildService({ name, serviceType, description, url, image }) {
  const node = {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed(),
    url,
  };
  if (image) node.image = image;
  return node;
}

export function buildFaqPage(items, url) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildBreadcrumbList(items, url) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// Dataset for the Cost & Scope Index. Only emitted where the medians are visible (homepage).
export function buildDataset(costItems) {
  return {
    "@type": "Dataset",
    "@id": `${SITE.baseUrl}/#cost-scope-index`,
    name: "Locke & Ladder Cost & Scope Index",
    description:
      "The Locke & Ladder Cost & Scope Index is based on 1,317 sanitized active estimates dated January 1, 2025 or later. Customer information is removed. The numbers are planning ranges, not final quotes.",
    creator: { "@id": BUSINESS_ID },
    temporalCoverage: "2025-01-01/..",
    measurementTechnique: "Median of sanitized active estimates",
    variableMeasured: costItems.map((c) => ({
      "@type": "PropertyValue",
      name: `${c.system} median`,
      value: c.value,
      unitText: "USD",
    })),
  };
}

export function buildGraph(nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

// Convenience composers used by the templates.
export function buildHomeSchema(data) {
  const url = data.seo.canonical;
  return buildGraph([
    buildLocalBusiness(),
    buildBranch(),
    buildWebSite(),
    buildWebPage({ url, name: data.seo.metaTitle, description: data.seo.metaDescription, image: data.seo.og.image, breadcrumbId: `${url}#breadcrumb` }),
    buildBreadcrumbList(data.seo.breadcrumb, url),
    buildDataset(data.costRanges.items),
    buildFaqPage(data.faq.items, url),
  ]);
}

export function buildServiceSchema(data) {
  const url = data.seo.canonical;
  return buildGraph([
    buildLocalBusiness(),
    buildWebPage({ url, name: data.seo.metaTitle, description: data.seo.metaDescription, image: data.seo.og.image, breadcrumbId: `${url}#breadcrumb` }),
    buildBreadcrumbList(data.seo.breadcrumb, url),
    buildService({ name: data.schema.serviceName, serviceType: data.schema.serviceType, description: data.schema.description, url, image: data.seo.og.image }),
    buildFaqPage(data.faq.items, url),
  ]);
}
