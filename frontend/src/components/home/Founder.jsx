import { Reveal } from "@/components/Reveal";

export const Founder = ({ data }) => (
  <section data-testid="founder" id="founder" className="border-t border-line bg-ink">
    <div className="shell grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Reveal>
          <figure className="overflow-hidden">
            <img
              src={data.image.src}
              width={data.image.w}
              height={data.image.h}
              loading="lazy"
              decoding="async"
              alt={data.image.alt}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-eyebrow text-paper/45">{data.caption}</figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="lg:col-span-7 lg:pl-4">
        <Reveal delay={0.05}>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
            {data.heading}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-paper/70 md:text-lg text-pretty">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-10 border-l-2 border-copper pl-6">
            <p className="font-display text-xl leading-snug tracking-tight text-paper md:text-2xl text-pretty">{data.quote}</p>
          </blockquote>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Founder;
