import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { REGIONS } from "@/data/content";

export const WhereWeWork = () => (
  <section data-testid="where-we-work" id="where-we-work" className="border-t border-line bg-ink">
    <div className="shell py-20 md:py-28">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">Where we work</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              Two metros, one standard.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/service-areas/"
              data-testid="areas-cta"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-paper/80 hover:text-copper transition-colors"
            >
              See all service areas
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {REGIONS.map((r, i) => (
          <Reveal key={r.region} delay={i * 0.06}>
            <div className="border-t border-line pt-8">
              <h3 className="font-display text-2xl font-medium tracking-tight text-paper md:text-3xl">
                {r.region}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-eyebrow text-copper">{r.label}</p>
              <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
                {r.cities.map((c) => (
                  <li key={c} className="text-base text-paper/70 border-b border-line/60 pb-2">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhereWeWork;
