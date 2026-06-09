import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const ctaClass = (variant) =>
  variant === "primary"
    ? "group inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-copper hover:text-paper"
    : "inline-flex items-center justify-center gap-2 border border-paper/40 px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-paper/10";

export const FinalCta = ({ data }) => (
  <section data-testid="final-cta" id="start" className="relative overflow-hidden border-t border-line">
    <img
      src={data.image.src}
      width={data.image.w}
      height={data.image.h}
      loading="lazy"
      decoding="async"
      alt={data.image.alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

    <div className="relative shell py-24 md:py-36">
      <Reveal>
        <p className="eyebrow">{data.eyebrow}</p>
        <h2 className="font-display mt-5 max-w-[18ch] text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl md:text-6xl text-balance">
          {data.heading}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg text-pretty">{data.lead}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          {data.ctas.map((c, i) => (
            <Link
              key={c.href + i}
              to={c.href}
              data-testid={`final-cta-${c.variant === "primary" ? "start" : "cost"}`}
              className={ctaClass(c.variant)}
            >
              {c.label}
              {c.variant === "primary" && (
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
