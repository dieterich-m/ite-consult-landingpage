import RevealOnScroll from "@/components/shared/RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";

export default function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <RevealOnScroll className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Häufige Fragen
          </h2>
          <p className="text-slate-500">
            Antworten auf die häufigsten Fragen rund um Maßmöbel, Innenausbau
            und unsere Arbeitsweise.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <Accordion type="single" collapsible className="w-full">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm md:text-base text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </section>
  );
}
