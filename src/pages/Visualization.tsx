import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageCompare } from "@/components/ui/ImageCompare";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";
import project4 from "@/assets/project-4.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const processSteps = [
  {
    step: "01",
    title: "Concept",
    description: "Understanding the vision and translating it into spatial intent.",
    icon: "💭",
  },
  {
    step: "02",
    title: "Modeling",
    description: "Building precise 3D geometry with attention to proportion and detail.",
    icon: "🏗️",
  },
  {
    step: "03",
    title: "Materials",
    description: "Applying photorealistic textures and material properties.",
    icon: "🎨",
  },
  {
    step: "04",
    title: "Lighting",
    description: "Crafting natural and artificial light for atmosphere and depth.",
    icon: "💡",
  },
  {
    step: "05",
    title: "Animation",
    description: "Creating cinematic camera movements and walkthroughs.",
    icon: "🎬",
  },
  {
    step: "06",
    title: "Final Output",
    description: "Delivering high-resolution renders and video sequences.",
    icon: "✨",
  },
];

const Visualization = () => {
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
              Visualization
            </motion.span>
            <motion.h1
              className="mt-4 text-display max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Seeing Before Building
            </motion.h1>
            <motion.p
              className="mt-8 text-subhead text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Photorealistic visualization and cinematic animation that bring unbuilt spaces to life.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image with parallax effect */}
      <section className="pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <motion.div
              className="aspect-[21/9] overflow-hidden rounded-xl relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={heroImage}
                alt="3D Visualization showcase"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent pointer-events-none" />
              {/* Play button hint */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full glass flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <span className="text-label text-muted-foreground">Our Approach</span>
              <motion.div
                className="mt-8 w-20 h-px bg-gradient-to-r from-accent to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
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

      {/* Before/After Comparison */}
      <section className="section-padding bg-muted/30">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Transformation</span>
            <h2 className="mt-4 text-headline max-w-2xl">See the Difference</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12">
            <ImageCompare
              beforeImage={project1}
              afterImage={project2}
              beforeLabel="Concept"
              afterLabel="Final Render"
              className="aspect-[16/9] rounded-xl"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-6">
                <motion.div
                  className="aspect-[4/5] overflow-hidden rounded-lg relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={project4}
                    alt="Visualization example"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-label text-muted-foreground">Capabilities</span>
                <h2 className="mt-4 text-headline">What We Deliver</h2>
                <div className="mt-8 space-y-4">
                  {[
                    "Photorealistic still renders",
                    "360° panoramic views",
                    "Cinematic walkthrough animations",
                    "Material and lighting studies",
                    "Virtual reality experiences",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4 py-4 border-b border-border group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-body">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-primary-foreground/60">Process</span>
            <h2 className="mt-4 text-headline max-w-2xl">From Concept to Completion</h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <motion.div
                  className="border-t border-primary-foreground/20 pt-8 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-caption text-primary-foreground/40">{step.step}</span>
                    <motion.span
                      className="text-2xl"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    >
                      {step.icon}
                    </motion.span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-light">{step.title}</h3>
                  <p className="mt-3 text-body text-primary-foreground/60">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Visualization;
