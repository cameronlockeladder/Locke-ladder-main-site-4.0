import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const FinalCta = () => (
  <section data-testid="final-cta" id="start" className="relative overflow-hidden border-t border-line">
    <img
      src="/images/snape-aerial.jpg"
      width="1920"
      height="1004"
      loading="lazy"
      decoding="async"
      alt="Aerial view of a high-end home exterior completed by Locke & Ladder."
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

    <div className="relative shell py-24 md:py-36">
      <Reveal>
        <p className="eyebrow">Start here</p>
        <h2 className="font-display mt-5 max-w-[18ch] text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl md:text-6xl text-balance">
          Start with the question that matters most.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg text-pretty">
          Cost, material, scope, or timing. Pick the one keeping you up and we will give you a straight
          answer, before anyone tries to sell you anything.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/cost-scope-index/"
            data-testid="final-cta-cost"
            className="inline-flex items-center justify-center gap-2 border border-paper/40 px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-paper/10"
          >
            See cost ranges
          </Link>
          <Link
            to="/start-here/"
            data-testid="final-cta-start"
            className="group inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-copper hover:text-paper"
          >
            Start here
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
