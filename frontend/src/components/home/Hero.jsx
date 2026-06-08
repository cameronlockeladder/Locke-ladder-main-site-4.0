import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TRUST_SIGNALS } from "@/data/content";

export const Hero = () => (
  <section data-testid="hero" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-end">
    <img
      src="/images/hero-home.jpg"
      width="1920"
      height="1023"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      alt="High-end home exterior with a synthetic cedar shake roof, copper detailing, and crisp trim lines at dusk."
      className="absolute inset-0 h-full w-full object-cover"
    />
    {/* Contrast overlays. Kept directional so the photography still reads. */}
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" aria-hidden="true" />

    <div className="relative shell pb-12 pt-28 md:pb-16">
      <p className="eyebrow" data-testid="hero-eyebrow">Indianapolis Metro · Western Chicago Suburbs</p>
      <h1
        data-testid="hero-h1"
        className="font-display mt-5 max-w-[16ch] text-[2.7rem] leading-[0.98] tracking-tight text-paper sm:text-6xl lg:text-7xl text-balance"
      >
        Because the details matter.
      </h1>
      <p data-testid="hero-lead" className="mt-6 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg text-pretty">
        Locke &amp; Ladder handles roofing, siding, windows, doors, gutters, storm claims, and commercial
        exterior work for high-end homes in the Indianapolis metro and the western Chicago suburbs.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to="/start-here/"
          data-testid="hero-cta-primary"
          className="group inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-copper hover:text-paper"
        >
          Start with your project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          to="/cost-scope-index/"
          data-testid="hero-cta-secondary"
          className="inline-flex items-center justify-center gap-2 border border-paper/40 px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-paper/10"
        >
          See real cost ranges
        </Link>
      </div>

      <ul
        data-testid="hero-trust-signals"
        className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-6 text-xs tracking-wide text-paper/65 sm:text-sm"
      >
        {TRUST_SIGNALS.map((t, i) => (
          <li key={t} className="flex items-center gap-x-5">
            {i > 0 && <span className="hidden h-3 w-px bg-paper/25 sm:inline-block" aria-hidden="true" />}
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
