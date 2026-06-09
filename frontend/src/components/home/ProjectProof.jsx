import { Reveal } from "@/components/Reveal";

export const ProjectProof = ({ data }) => {
  const [feature, ...rest] = data.items;
  return (
    <section data-testid="project-proof" id="project-proof" className="border-t border-line bg-ink-2">
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

        <Reveal delay={0.05}>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-12">
            <div className="overflow-hidden md:col-span-7">
              <img
                src={feature.image}
                width={feature.w}
                height={feature.h}
                loading="lazy"
                decoding="async"
                alt={feature.alt}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="md:col-span-5">
              <p className="eyebrow text-paper/45">Proof 01</p>
              <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-paper md:text-3xl">{feature.label}</h3>
              <p className="mt-4 text-base leading-relaxed text-paper/70 text-pretty">{feature.body}</p>
            </div>
          </div>
        </Reveal>

        {rest.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {rest.map((p, i) => (
              <Reveal key={p.label} delay={0.05 + i * 0.05}>
                <article>
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      decoding="async"
                      alt={p.alt}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <p className="eyebrow mt-5 text-paper/45">Proof 0{i + 2}</p>
                  <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-paper md:text-2xl">{p.label}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/65 text-pretty">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {data.reviews && data.reviews.length > 0 && (
          <Reveal delay={0.05}>
            <div className="mt-20 grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-4">
                {data.rating?.graphic && (
                  <img
                    src={data.rating.graphic}
                    width="240"
                    height="64"
                    loading="lazy"
                    decoding="async"
                    alt="Google five star rating"
                    className="h-9 w-auto"
                  />
                )}
                <p className="font-display mt-5 text-2xl tracking-tight text-paper md:text-3xl">{data.rating?.text}</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-2">
                {data.reviews.map((r) => (
                  <blockquote key={r.author} className="border-l-2 border-line pl-5">
                    <p className="text-base leading-relaxed text-paper/80 text-pretty">{r.quote}</p>
                    <cite className="mt-3 block text-xs uppercase not-italic tracking-eyebrow text-copper">{r.author}</cite>
                  </blockquote>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default ProjectProof;
