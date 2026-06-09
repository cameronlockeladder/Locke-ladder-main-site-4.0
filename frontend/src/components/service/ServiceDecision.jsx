import { Reveal } from "@/components/Reveal";

// "What the decision really is" block: heading + intro + a grid of factors.
export const ServiceDecision = ({ data }) => (
  <section data-testid="service-decision" className="border-t border-line bg-ink">
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

      <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {data.factors.map((f, i) => (
          <Reveal key={f.title} delay={Math.min(i * 0.04, 0.2)}>
            <div className="h-full border-b border-line px-0 py-8 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:px-6 lg:[&:nth-child(3n+1)]:pl-0">
              <span className="font-display text-sm text-copper">0{i + 1}</span>
              <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-paper">{f.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/65 text-pretty">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceDecision;
