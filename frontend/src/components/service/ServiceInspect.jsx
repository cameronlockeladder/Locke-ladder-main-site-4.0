import { Reveal } from "@/components/Reveal";

// "What we inspect before we price" checklist.
export const ServiceInspect = ({ data }) => (
  <section data-testid="service-inspect" className="border-t border-line bg-ink">
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

      <div className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-2">
        {data.items.map((it, i) => (
          <Reveal key={it.title} delay={Math.min(i * 0.03, 0.18)}>
            <div className="flex gap-5 border-b border-line py-7 md:px-6 md:[&:nth-child(odd)]:pl-0">
              <span className="font-display text-sm text-copper">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-lg font-medium tracking-tight text-paper md:text-xl">{it.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/65 text-pretty">{it.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceInspect;
