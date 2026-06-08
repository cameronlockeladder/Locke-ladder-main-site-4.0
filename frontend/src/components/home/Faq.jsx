import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/data/content";

export const Faq = () => (
  <section data-testid="faq" id="faq" className="border-t border-line bg-ink-2">
    <div className="shell grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">Common questions</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl text-balance">
              The questions buyers actually ask.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/60">
              Straight answers to the hard ones, including cost, material fit, and what a real quote should
              contain.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="lg:col-span-8">
        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="border-t border-line">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-line" data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="font-display text-left text-lg font-medium tracking-tight text-paper hover:no-underline data-[state=open]:text-copper py-6 md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-base leading-relaxed text-paper/70 text-pretty">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Faq;
