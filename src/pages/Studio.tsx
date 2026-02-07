import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import studioPortrait from "@/assets/studio-portrait.jpg";

const stats = [
  { value: 12, suffix: "", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "+", label: "Awards Won" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const values = [
  {
    title: "Restraint",
    description: "We remove until only the essential remains. Luxury is not addition — it is precision.",
    icon: "◇",
  },
  {
    title: "Material Truth",
    description: "We honor materials as they are. Wood, stone, glass, and light — each speaks its own language.",
    icon: "△",
  },
  {
    title: "Timelessness",
    description: "We design for decades, not seasons. Our spaces age with grace, not with trends.",
    icon: "○",
  },
];

const Studio = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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
              The Studio
            </motion.span>
            <motion.h1
              className="mt-4 text-display max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Design as Discipline
            </motion.h1>
            <motion.div
              className="mt-8 w-24 h-px bg-gradient-to-r from-accent to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-foreground text-primary-foreground">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-serif text-3xl md:text-4xl font-light">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-caption text-primary-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <AnimatedSection className="lg:col-span-6 order-2 lg:order-1">
              <div
                ref={imageRef}
                className="aspect-[4/5] overflow-hidden rounded-lg relative"
              >
                <motion.img
                  src={studioPortrait}
                  alt="Studio founder"
                  className="w-full h-full object-cover"
                  style={{ y: imageY }}
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
              </div>
            </AnimatedSection>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
              <AnimatedSection delay={0.2}>
                <span className="text-label text-muted-foreground">Our Philosophy</span>
                <h2 className="mt-4 text-headline">
                  Architecture as an act of restraint.
                </h2>
                <div className="mt-8 space-y-6 text-body text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Atelier was founded on a simple conviction: the best design disappears.
                    It serves. It endures. It refuses to compete for attention.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    We approach each project with the belief that luxury is not about
                    ornamentation, but about precision. About materials chosen for their
                    honesty. About spaces that feel inevitable, as if they were always
                    meant to exist.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Our work spans residential and commercial architecture, interior design,
                    and photorealistic visualization — always unified by the same philosophy:
                    quiet confidence, material truth, and respect for proportion.
                  </motion.p>
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <motion.div
                  className="border-t border-border pt-8 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-3xl text-accent/50 group-hover:text-accent transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.span>
                  <h3 className="mt-6 font-serif text-2xl font-light">{value.title}</h3>
                  <p className="mt-4 text-body text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Culture hint */}
      <section className="section-padding">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <motion.div
              className="w-20 h-20 mx-auto mb-8 rounded-full border border-accent/30 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl gradient-text-gold">★</span>
            </motion.div>
            <h2 className="text-headline max-w-2xl mx-auto">
              A small team of dedicated craftspeople.
            </h2>
            <p className="mt-6 text-body text-muted-foreground max-w-lg mx-auto">
              We believe in quality over quantity. Every project receives our full attention and dedication.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
