import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

export const WhatWeDo = ({ data }) => (
  <section data-testid="what-we-do" id="what-we-do" className="border-t border-line bg-ink-2">
    <div className="shell grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              {data.heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/65">{data.intro}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 hidden overflow-hidden lg:block">
              <img
                src={data.image.src}
                width={data.image.w}
                height={data.image.h}
                loading="lazy"
                decoding="async"
                alt={data.image.alt}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="lg:col-span-7">
        <ul className="border-t border-line">
          {data.services.map((s, i) => (
            <li key={s.title} className="border-b border-line">
              <Reveal delay={Math.min(i * 0.05, 0.2)}>
                <div data-testid={`service-${s.n}`} className="group grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:gap-6">
                  <div className="flex items-baseline gap-4 md:col-span-4">
                    <span className="font-display text-sm text-copper">{s.n}</span>
                    {s.href ? (
                      <Link
                        to={s.href}
                        className="font-display text-xl font-medium tracking-tight text-paper transition-colors duration-200 group-hover:text-copper md:text-2xl"
                      >
                        {s.title}
                      </Link>
                    ) : (
                      <h3 className="font-display text-xl font-medium tracking-tight text-paper md:text-2xl">{s.title}</h3>
                    )}
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-paper/65 md:col-span-8 text-pretty">{s.body}</p>
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
