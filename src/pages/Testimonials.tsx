import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Atelier understood what we couldn't articulate. They created a home that feels like it was always there, waiting for us.",
    name: "Sarah Mitchell",
    role: "Homeowner, Hillside Residence",
    rating: 5,
  },
  {
    quote: "Working with them was a masterclass in restraint. They removed everything unnecessary until only beauty remained.",
    name: "James Chen",
    role: "Developer, Urban Lofts",
    rating: 5,
  },
  {
    quote: "The visualizations were indistinguishable from photographs. It gave us complete confidence before breaking ground.",
    name: "Elena Rodriguez",
    role: "Architect, Partner at RDZ Studio",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <motion.span
              className="text-label text-muted-foreground inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Testimonials
            </motion.span>
            <motion.h1
              className="mt-4 text-display max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Client Words
            </motion.h1>
            <motion.p
              className="mt-8 text-subhead text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What our clients say about working with us.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20">
        <div className="container-editorial">
          <div className="space-y-0">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  className="py-16 md:py-24 border-t border-border last:border-b relative group"
                  whileHover={{ backgroundColor: "rgba(212, 197, 176, 0.03)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Large decorative quote mark */}
                  <motion.span
                    className="absolute -top-4 left-0 font-serif text-[120px] md:text-[200px] text-accent/10 leading-none pointer-events-none select-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    "
                  </motion.span>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 relative">
                    <div className="lg:col-span-8">
                      {/* Star rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-accent"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>

                      <blockquote className="text-headline font-serif font-light leading-relaxed">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          "{testimonial.quote}"
                        </motion.span>
                      </blockquote>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {/* Avatar placeholder */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 mb-4 flex items-center justify-center">
                          <span className="font-serif text-lg text-accent">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-body font-medium">{testimonial.name}</p>
                        <p className="mt-1 text-caption text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <motion.div
              className="w-16 h-16 mx-auto mb-8 rounded-full border border-accent/30 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl gradient-text-gold">♥</span>
            </motion.div>
            <h2 className="text-headline max-w-2xl mx-auto">
              Ready to join our happy clients?
            </h2>
            <p className="mt-6 text-body text-muted-foreground max-w-lg mx-auto">
              Let's discuss how we can bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              className="inline-block mt-10 btn-premium"
              whileHover={{ scale: 1.02 }}
            >
              Start Your Project
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
