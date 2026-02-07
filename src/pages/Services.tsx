import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const services = [
  {
    title: "Interior Design",
    description: "Creating atmospheres of understated elegance through careful material selection and spatial planning.",
    image: project1,
    icon: "◇",
    features: ["Space Planning", "Material Selection", "Custom Furniture", "Lighting Design"],
  },
  {
    title: "Architecture",
    description: "Designing structures that respond to context, light, and the rhythms of daily life.",
    image: project2,
    icon: "△",
    features: ["Residential", "Commercial", "Renovations", "Sustainable Design"],
  },
  {
    title: "3D Visualization",
    description: "Photorealistic renders that communicate design intent with precision and clarity.",
    image: project3,
    icon: "○",
    features: ["Still Renders", "360° Views", "Virtual Tours", "Material Studies"],
  },
  {
    title: "Architectural Animation",
    description: "Cinematic walkthroughs that allow clients to experience unbuilt spaces.",
    image: project4,
    icon: "□",
    features: ["Walkthroughs", "Fly-throughs", "Day/Night Studies", "Seasonal Variations"],
  },
];

const Services = () => {
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
              Services
            </motion.span>
            <motion.h1
              className="mt-4 text-display max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Our Expertise
            </motion.h1>
            <motion.p
              className="mt-8 text-subhead text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Four disciplines, one philosophy: restraint, precision, and spaces that endure.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`border-t border-border ${index === services.length - 1 ? "border-b" : ""}`}
          >
            <div className="container-editorial">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 md:py-24">
                <AnimatedSection className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    className="aspect-[4/3] overflow-hidden rounded-lg relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                    />
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Icon overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span className="text-6xl text-white/50">{service.icon}</span>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection
                  className={`lg:col-span-6 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  delay={0.2}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      className="text-3xl text-accent/50"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.span>
                    <span className="text-label text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h2 className="mt-4 text-headline">{service.title}</h2>
                  <p className="mt-6 text-body text-muted-foreground max-w-md">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Process hint */}
      <section className="section-padding bg-muted/30">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <h2 className="text-headline max-w-2xl mx-auto">
              Ready to transform your space?
            </h2>
            <p className="mt-6 text-body text-muted-foreground max-w-lg mx-auto">
              Every project begins with a conversation about your vision, needs, and aspirations.
            </p>
            <motion.a
              href="/contact"
              className="inline-block mt-10 btn-premium"
              whileHover={{ scale: 1.02 }}
            >
              Start a Conversation
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
