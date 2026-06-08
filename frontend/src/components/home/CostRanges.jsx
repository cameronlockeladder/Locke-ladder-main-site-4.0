import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { COSTS, COST_DISCLAIMER } from "@/data/content";

const Money = ({ value }) => (
  <span className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl md:text-[2.75rem]">
    <span className="mr-0.5 align-top text-[0.5em] text-copper">$</span>
    {value}
  </span>
);

export const CostRanges = () => (
  <section data-testid="cost-ranges" id="cost-ranges" className="border-t border-line bg-ink halftone">
    <div className="shell py-20 md:py-28">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow">Real cost ranges</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              Planning ranges from 1,317 real estimates.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:pt-2">
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-paper/65">
              Median numbers from our active estimate data, shown before anyone visits your home. These are
              planning ranges, not final quotes. Your number depends on the real scope.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 border-t border-line">
        {COSTS.map((c, i) => (
          <Reveal key={c.system} delay={Math.min(i * 0.04, 0.18)}>
            <div
              data-testid={`cost-row-${i}`}
              className="grid grid-cols-1 items-end gap-2 border-b border-line py-7 sm:grid-cols-12 sm:gap-6"
            >
              <div className="sm:col-span-7">
                <h3 className="font-display text-lg font-medium tracking-tight text-paper md:text-xl">
                  {c.system}
                </h3>
                <p className="mt-1 text-sm text-paper/50">{c.note}</p>
              </div>
              <div className="flex items-end justify-between gap-4 sm:col-span-5 sm:justify-end sm:gap-8">
                <Money value={c.median} />
                <span className="pb-1 text-xs uppercase tracking-eyebrow text-paper/40">n={c.n}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
          <p data-testid="cost-disclaimer" className="text-sm leading-relaxed text-paper/50 md:col-span-8 max-w-2xl">
            {COST_DISCLAIMER}
          </p>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/cost-scope-index/"
              data-testid="cost-cta"
              className="group inline-flex items-center gap-2 border border-paper/40 px-6 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
            >
              See the full Cost &amp; Scope Index
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CostRanges;
