import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { buildServiceSchema } from "@/components/seo/schemaBuilders";
import { Reveal } from "@/components/Reveal";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceDecision from "@/components/service/ServiceDecision";
import ServiceMaterials from "@/components/service/ServiceMaterials";
import ServiceInspect from "@/components/service/ServiceInspect";
import CostRanges from "@/components/home/CostRanges";
import ProjectProof from "@/components/home/ProjectProof";
import Faq from "@/components/home/Faq";
import WhereWeWork from "@/components/home/WhereWeWork";
import FinalCta from "@/components/home/FinalCta";

// Reusable service-page template. Every block reads from the data object only.
// No service-specific copy lives here. Render with: <ServicePageTemplate data={roofing} />
export default function ServicePageTemplate({ data }) {
  return (
    <>
      <Seo seo={data.seo} schema={buildServiceSchema(data)} />
      <Nav />
      <main data-testid="service-page" data-slug={data.slug}>
        <ServiceHero hero={data.hero} />
        <ServiceDecision data={data.decision} />
        <ServiceMaterials data={data.materials} />
        <CostRanges data={data.cost} />
        <ServiceInspect data={data.inspect} />
        <ProjectProof data={data.proof} />
        <Faq data={data.faq} />
        <WhereWeWork data={data.areas} />

        {data.related && (
          <section data-testid="service-related" className="border-t border-line bg-ink-2">
            <div className="shell py-16 md:py-20">
              <Reveal>
                <p className="eyebrow">{data.related.eyebrow}</p>
                <h2 className="font-display mt-4 max-w-2xl text-2xl leading-tight tracking-tight text-paper sm:text-3xl md:text-4xl text-balance">
                  {data.related.heading}
                </h2>
                <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  {data.related.services.map((s) => (
                    <li key={s.href}>
                      <Link
                        to={s.href}
                        className="group inline-flex items-center gap-2 font-display text-lg font-medium tracking-tight text-paper hover:text-copper transition-colors md:text-xl"
                      >
                        {s.label}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        <FinalCta data={data.finalCta} />
      </main>
      <Footer />
    </>
  );
}
