import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import heroImage from "@/assets/hero-interior.jpg";
import project4 from "@/assets/project-4.jpg";

const processSteps = [
  {
    step: "01",
    title: "Concept",
    description: "Understanding the vision and translating it into spatial intent.",
  },
  {
    step: "02",
    title: "Modeling",
    description: "Building precise 3D geometry with attention to proportion and detail.",
  },
  {
    step: "03",
    title: "Materials",
    description: "Applying photorealistic textures and material properties.",
  },
  {
    step: "04",
    title: "Lighting",
    description: "Crafting natural and artificial light for atmosphere and depth.",
  },
  {
    step: "05",
    title: "Animation",
    description: "Creating cinematic camera movements and walkthroughs.",
  },
  {
    step: "06",
    title: "Final Output",
    description: "Delivering high-resolution renders and video sequences.",
  },
];

const Visualization = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Visualization</span>
            <h1 className="mt-4 text-display max-w-4xl">
              Seeing Before Building
            </h1>
            <p className="mt-8 text-subhead text-muted-foreground max-w-2xl">
              Photorealistic visualization and cinematic animation that bring unbuilt spaces to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="aspect-[21/9] image-reveal">
              <img
                src={heroImage}
                alt="3D Visualization showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <span className="text-label text-muted-foreground">Our Approach</span>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-7" delay={0.2}>
              <h2 className="text-headline">
                We treat visualization as architecture in its purest form.
              </h2>
              <p className="mt-8 text-body text-muted-foreground max-w-2xl">
                Our renders are not mere representations — they are experiences. We obsess over 
                lighting accuracy, material authenticity, and the emotional quality of space. 
                Every shadow, every reflection, every grain of wood is considered.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-muted/30">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-6">
                <div className="aspect-[4/5] image-reveal">
                  <img
                    src={project4}
                    alt="Visualization example"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-label text-muted-foreground">Capabilities</span>
                <h2 className="mt-4 text-headline">What We Deliver</h2>
                <div className="mt-8 space-y-6">
                  {[
                    "Photorealistic still renders",
                    "360° panoramic views",
                    "Cinematic walkthrough animations",
                    "Material and lighting studies",
                    "Virtual reality experiences",
                  ].map((item, index) => (
                    <AnimatedSection key={item} delay={index * 0.1}>
                      <div className="flex items-center gap-4 py-4 border-b border-border">
                        <span className="text-body">{item}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Process</span>
            <h2 className="mt-4 text-headline max-w-2xl">From Concept to Completion</h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="border-t border-border pt-8">
                  <span className="text-caption text-muted-foreground">{step.step}</span>
                  <h3 className="mt-4 font-serif text-2xl font-light">{step.title}</h3>
                  <p className="mt-3 text-body text-muted-foreground">
                    {step.description}
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

export default Visualization;
