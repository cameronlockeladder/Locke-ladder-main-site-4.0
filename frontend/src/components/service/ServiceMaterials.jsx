import { Reveal } from "@/components/Reveal";

// Materials / options block. Each option states when it makes sense and the honest tradeoff.
export const ServiceMaterials = ({ data }) => (
  <section data-testid="service-materials" className="border-t border-line bg-ink-2">
    <div className="shell py-20 md:py-28">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              {data.heading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-paper/65 md:col-span-5">{data.intro}</p>
        </div>
      </Reveal>

      <ul className="mt-14 border-t border-line">
        {data.options.map((o, i) => (
          <li key={o.name} className="border-b border-line">
            <Reveal delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid grid-cols-1 gap-4 py-9 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <span className="font-display text-sm text-copper">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-xl font-medium tracking-tight text-paper md:text-2xl">{o.name}</h3>
                </div>
                <div className="md:col-span-8 md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-eyebrow text-paper/40">When it makes sense</p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/70 text-pretty">{o.when}</p>
                  </div>
                  <div className="mt-5 md:mt-0">
                    <p className="text-xs uppercase tracking-eyebrow text-paper/40">The tradeoff</p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/70 text-pretty">{o.tradeoff}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ServiceMaterials;
