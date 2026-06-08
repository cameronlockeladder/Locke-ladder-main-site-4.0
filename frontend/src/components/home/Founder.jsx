import { Reveal } from "@/components/Reveal";

export const Founder = () => (
  <section data-testid="founder" id="founder" className="border-t border-line bg-ink">
    <div className="shell grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Reveal>
          <figure className="overflow-hidden">
            <img
              src="/images/jon-strand.webp"
              width="1920"
              height="1279"
              loading="lazy"
              decoding="async"
              alt="Jon Strand, founder of Locke & Ladder, presenting an exterior project plan."
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-eyebrow text-paper/45">
              Jon Strand · Founder
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="lg:col-span-7 lg:pl-4">
        <Reveal delay={0.05}>
          <p className="eyebrow">Founder and ethos</p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
            A roofer who went to art school.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-paper/70 md:text-lg text-pretty">
            <p>
              Locke &amp; Ladder was founded by Jon Strand, who learned roofing and construction while paying
              his way through the Herron School of Art in Indianapolis. That mix is the whole point. A trained
              eye for proportion, color, and shadow line, applied to a trade that usually ignores all three.
            </p>
            <p>
              The company was built against the things that frustrate high-end homeowners: vague quotes,
              pressure sales, missing scope, and poor communication. The answer was simple and hard. Explain
              the real decision, show the real scope, and do the work like the details matter.
            </p>
          </div>
          <blockquote className="mt-10 border-l-2 border-copper pl-6">
            <p className="font-display text-xl leading-snug tracking-tight text-paper md:text-2xl text-pretty">
              Craft and design are not extras on a roof. They are the difference between a house that ages well
              and a house that just gets covered.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Founder;
