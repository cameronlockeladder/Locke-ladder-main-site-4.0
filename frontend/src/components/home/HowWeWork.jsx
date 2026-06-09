import { Reveal } from "@/components/Reveal";

export const HowWeWork = ({ data }) => (
  <section data-testid="how-we-work" id="how-we-work" className="border-t border-line bg-ink-2">
    <div className="shell py-20 md:py-28">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              {data.heading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-paper/60 md:col-span-4">{data.intro}</p>
        </div>
      </Reveal>

      <ol className="mt-14 border-t border-line">
        {data.steps.map((s, i) => (
          <li key={s.n} className="border-b border-line">
            <Reveal delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:gap-6">
                <span className="font-display text-3xl leading-none text-paper/25 md:col-span-2 md:text-4xl">{s.n}</span>
                <h3 className="font-display text-xl font-medium tracking-tight text-paper md:col-span-4 md:text-2xl">{s.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-paper/65 md:col-span-6 text-pretty">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowWeWork;
