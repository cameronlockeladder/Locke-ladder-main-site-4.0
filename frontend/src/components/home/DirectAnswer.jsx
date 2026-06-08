import { Reveal } from "@/components/Reveal";

export const DirectAnswer = () => (
  <section data-testid="direct-answer" id="overview" className="border-t border-line bg-ink">
    <div className="shell grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:py-28">
      <div className="md:col-span-4">
        <Reveal>
          <p className="eyebrow">The exterior decision</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/55 max-w-xs">
            What we do, in one paragraph, for the people and the answer engines that read first.
          </p>
        </Reveal>
      </div>
      <div className="md:col-span-8">
        <Reveal delay={0.05}>
          <p className="font-display text-2xl leading-snug tracking-tight text-paper sm:text-3xl md:text-[2.1rem] text-pretty">
            Locke &amp; Ladder is a premium exterior design and roofing firm serving the Indianapolis metro
            and the western Chicago suburbs. We handle roofing, siding, windows, doors, gutters, storm and
            insurance claims, and commercial exterior work.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-paper/70 md:text-lg text-pretty">
            The exterior is not a single product. It protects the people inside, controls where water goes,
            holds the curb appeal of the home, and decides how the house performs over the next twenty years.
            Most homeowners come to us because they do not want a rushed quote or a thin answer. They want to
            understand the real scope, the material fit, and the cost before anyone starts selling.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default DirectAnswer;
