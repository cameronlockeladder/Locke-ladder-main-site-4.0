import ServicePageTemplate from "@/templates/ServicePageTemplate";
import ComingSoon from "@/pages/ComingSoon";
import { getServicePage } from "@/data/servicePages";

// Resolves a service page by slug from the registry. If no data exists yet,
// it falls back to the ComingSoon placeholder so the route still resolves cleanly.
export default function ServicePage({ slug }) {
  const data = getServicePage(slug);
  if (!data) return <ComingSoon title="Service" />;
  return <ServicePageTemplate data={data} />;
}
