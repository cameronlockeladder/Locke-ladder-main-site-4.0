import { Reveal } from "@/components/Reveal";

export const DirectAnswer = ({ data }) => (
  <section data-testid="direct-answer" id="overview" className="border-t border-line bg-ink">
    <div className="shell grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:py-28">
      <div className="md:col-span-4">
        <Reveal>
          <p className="eyebrow">{data.eyebrow}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">{data.label}</p>
        </Reveal>
      </div>
      <div className="md:col-span-8">
        <Reveal delay={0.05}>
          <p className="font-display text-2xl leading-snug tracking-tight text-paper sm:text-3xl md:text-[2.1rem] text-pretty">
            {data.lead}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-paper/70 md:text-lg text-pretty">{data.body}</p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default DirectAnswer;
