import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import studioPortrait from "@/assets/studio-portrait.jpg";

const Studio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">The Studio</span>
            <h1 className="mt-4 text-display max-w-4xl">
              Design as Discipline
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <AnimatedSection className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-[4/5] image-reveal">
                <img
                  src={studioPortrait}
                  alt="Studio founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
              <AnimatedSection delay={0.2}>
                <h2 className="text-headline">
                  Architecture as an act of restraint.
                </h2>
                <div className="mt-8 space-y-6 text-body text-muted-foreground">
                  <p>
                    Atelier was founded on a simple conviction: the best design disappears. 
                    It serves. It endures. It refuses to compete for attention.
                  </p>
                  <p>
                    We approach each project with the belief that luxury is not about 
                    ornamentation, but about precision. About materials chosen for their 
                    honesty. About spaces that feel inevitable, as if they were always 
                    meant to exist.
                  </p>
                  <p>
                    Our work spans residential and commercial architecture, interior design, 
                    and photorealistic visualization — always unified by the same philosophy: 
                    quiet confidence, material truth, and respect for proportion.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Principles</span>
            <h2 className="mt-4 text-headline max-w-2xl">What Guides Us</h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "Restraint",
                description: "We remove until only the essential remains. Luxury is not addition — it is precision.",
              },
              {
                title: "Material Truth",
                description: "We honor materials as they are. Wood, stone, glass, and light — each speaks its own language.",
              },
              {
                title: "Timelessness",
                description: "We design for decades, not seasons. Our spaces age with grace, not with trends.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <div className="border-t border-border pt-8">
                  <h3 className="font-serif text-2xl font-light">{value.title}</h3>
                  <p className="mt-4 text-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
