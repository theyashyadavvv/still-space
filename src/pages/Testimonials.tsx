import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote: "Atelier understood what we couldn't articulate. They created a home that feels like it was always there, waiting for us.",
    name: "Sarah Mitchell",
    role: "Homeowner, Hillside Residence",
  },
  {
    quote: "Working with them was a masterclass in restraint. They removed everything unnecessary until only beauty remained.",
    name: "James Chen",
    role: "Developer, Urban Lofts",
  },
  {
    quote: "The visualizations were indistinguishable from photographs. It gave us complete confidence before breaking ground.",
    name: "Elena Rodriguez",
    role: "Architect, Partner at RDZ Studio",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Testimonials</span>
            <h1 className="mt-4 text-display max-w-4xl">Client Words</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20">
        <div className="container-editorial">
          <div className="space-y-0">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="py-16 md:py-24 border-t border-border last:border-b">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
                    <div className="lg:col-span-8">
                      <blockquote className="text-headline font-serif font-light leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                      <div>
                        <p className="text-body font-medium">{testimonial.name}</p>
                        <p className="mt-1 text-caption text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
