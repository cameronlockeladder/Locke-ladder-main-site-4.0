// Registry of built service pages. Add new entries here as service-page data files are created.
// Example to add later:
//   import { windowsDoors } from "@/data/servicePages/windows-doors";
//   export const servicePages = { roofing, "windows-doors": windowsDoors };
import { roofing } from "@/data/servicePages/roofing";

export const servicePages = {
  roofing,
};

export const getServicePage = (slug) => servicePages[slug] || null;

export default servicePages;
