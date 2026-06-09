import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Service-page hero. Mirrors the home hero but leads with a direct-answer paragraph
// (first ~150 words) for answer-engine extraction.
export const ServiceHero = ({ hero }) => (
  <section data-testid="service-hero" className="relative min-h-[88svh] w-full overflow-hidden flex flex-col justify-end">
    <img
      src={hero.image.src}
      width={hero.image.w}
      height={hero.image.h}
      fetchPriority="high"
      loading="eager"
      decoding="async"
      alt={hero.image.alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/15" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" aria-hidden="true" />

    <div className="relative shell pb-12 pt-28 md:pb-16">
      <p className="eyebrow" data-testid="service-hero-eyebrow">{hero.eyebrow}</p>
      <h1
        data-testid="service-hero-h1"
        className="font-display mt-5 max-w-[18ch] text-[2.5rem] leading-[1.0] tracking-tight text-paper sm:text-6xl lg:text-7xl text-balance"
      >
        {hero.h1}
      </h1>
      <p data-testid="service-direct-answer" className="mt-6 max-w-3xl text-base leading-relaxed text-paper/85 md:text-lg text-pretty">
        {hero.directAnswer}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to={hero.primaryCta.href}
          data-testid="service-cta-primary"
          className="group inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-copper hover:text-paper"
        >
          {hero.primaryCta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          to={hero.secondaryCta.href}
          data-testid="service-cta-secondary"
          className="inline-flex items-center justify-center gap-2 border border-paper/40 px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-paper/10"
        >
          {hero.secondaryCta.label}
        </Link>
      </div>
    </div>
  </section>
);

export default ServiceHero;
