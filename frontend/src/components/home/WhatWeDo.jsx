import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/content";

export const WhatWeDo = () => (
  <section data-testid="what-we-do" id="what-we-do" className="border-t border-line bg-ink-2">
    <div className="shell grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
      {/* Left: heading + standing image */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              Six exterior systems, one connected decision.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/65">
              Every block below answers the real choice in front of you, not a list of products. The
              exterior works as one system, so we plan it that way.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 hidden overflow-hidden lg:block">
              <img
                src="/images/roofing-copper.jpg"
                width="1920"
                height="1278"
                loading="lazy"
                decoding="async"
                alt="Copper roof detail with clean standing seams and aged patina on a high-end home."
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Right: editorial list */}
      <div className="lg:col-span-7">
        <ul className="border-t border-line">
          {SERVICES.map((s, i) => (
            <li key={s.title} className="border-b border-line">
              <Reveal delay={Math.min(i * 0.05, 0.2)}>
                <div
                  data-testid={`service-${s.n}`}
                  className="group grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:gap-6"
                >
                  <div className="flex items-baseline gap-4 md:col-span-4">
                    <span className="font-display text-sm text-copper">{s.n}</span>
                    <h3 className="font-display text-xl font-medium tracking-tight text-paper transition-colors duration-200 group-hover:text-copper md:text-2xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-paper/65 md:col-span-8 text-pretty">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhatWeDo;
