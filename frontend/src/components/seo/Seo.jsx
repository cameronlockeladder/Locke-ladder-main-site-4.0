import { useEffect } from "react";

// Runtime head management for this prototype React SPA.
// NOTE FOR PRODUCTION PORT: when this template is moved into a static or SSR build
// (Next.js / Vercel), render these tags and the JSON-LD in the server <head> instead of
// injecting them at runtime. The data objects and schemaBuilders are framework-agnostic.

function upsertMeta(attr, key, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({ seo, schema }) {
  useEffect(() => {
    if (seo.metaTitle) document.title = seo.metaTitle;
    upsertMeta("name", "description", seo.metaDescription);
    upsertMeta("name", "robots", seo.robots);
    if (seo.canonical) upsertLink("canonical", seo.canonical);

    if (seo.og) {
      upsertMeta("property", "og:type", seo.og.type);
      upsertMeta("property", "og:title", seo.og.title);
      upsertMeta("property", "og:description", seo.og.description);
      upsertMeta("property", "og:url", seo.og.url);
      upsertMeta("property", "og:image", seo.og.image);
      upsertMeta("property", "og:site_name", "Locke & Ladder");
      upsertMeta("name", "twitter:card", "summary_large_image");
      upsertMeta("name", "twitter:title", seo.og.title);
      upsertMeta("name", "twitter:description", seo.og.description);
      upsertMeta("name", "twitter:image", seo.og.image);
    }
  }, [seo]);

  useEffect(() => {
    if (!schema) return undefined;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-schema", "true");
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
}

export default Seo;
