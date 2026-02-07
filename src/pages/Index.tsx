import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import heroImage from "@/assets/hero-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "Hillside Residence",
    category: "Interior Design",
    image: project1,
  },
  {
    id: 2,
    title: "Urban Kitchen",
    category: "Renovation",
    image: project2,
  },
  {
    id: 3,
    title: "Garden Retreat",
    category: "Architecture",
    image: project3,
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src={heroImage}
              alt="Luxury interior design"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-hero" />

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 border border-white/10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-10 w-20 h-20 border border-white/5 rounded-full floating-shape"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        />

        {/* Hero Content */}
        <motion.div
          className="relative h-full flex items-end pb-20 md:pb-32"
          style={{ opacity: heroOpacity }}
        >
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-primary-foreground max-w-4xl text-glow">
                <TextReveal delay={0.5}>Spaces of Quiet Luxury</TextReveal>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-subhead text-primary-foreground/80 max-w-xl"
            >
              Architecture and interior design where restraint meets refinement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex gap-6 items-center"
            >
              <Link
                to="/projects"
                className="btn-premium bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="text-label text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-500 link-underline"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-caption text-primary-foreground/50">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-primary-foreground/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="font-serif text-4xl md:text-6xl font-light gradient-text-gold">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-caption text-muted-foreground">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <span className="text-label text-muted-foreground">Philosophy</span>
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
                We believe architecture should feel inevitable — as if the space was always meant to be.
              </h2>
              <p className="mt-8 text-body text-muted-foreground max-w-2xl">
                Every project begins with listening. Understanding not just what you need,
                but how you want to feel within your space. The result is architecture
                that serves without demanding attention.
              </p>
              <Link
                to="/studio"
                className="inline-flex items-center gap-3 mt-10 text-label group"
              >
                <span className="link-underline">About Our Studio</span>
                <motion.span
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-label text-muted-foreground">Selected Work</span>
                <h2 className="mt-4 text-headline">Recent Projects</h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-label link-underline group"
              >
                <span>View All Projects</span>
                <motion.span whileHover={{ x: 5 }}>→</motion.span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.15}>
                <Link to="/projects" className="group block perspective-1000">
                  <motion.div
                    className="image-zoom-blur aspect-[4/5] rounded-lg overflow-hidden relative"
                    whileHover={{ rotateX: 2, rotateY: -2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-caption text-primary-foreground/70">
                        View Project
                      </span>
                      <motion.div
                        className="mt-2 w-8 h-px bg-primary-foreground/50"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                      />
                    </motion.div>

                    {/* Project Number */}
                    <span className="absolute top-4 right-4 font-serif text-5xl text-white/10 font-light">
                      0{index + 1}
                    </span>
                  </motion.div>

                  <div className="mt-6">
                    <span className="text-caption text-muted-foreground">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-light group-hover:text-muted-foreground transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <Link
            to="/projects"
            className="md:hidden inline-flex items-center gap-2 mt-12 text-label link-underline"
          >
            <span>View All Projects</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <span className="text-label text-muted-foreground">Expertise</span>
              <h2 className="mt-4 text-headline">Our Services</h2>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 mt-8 text-label group"
              >
                <span className="link-underline">Learn More</span>
                <motion.span whileHover={{ x: 5 }}>→</motion.span>
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-8">
              <div className="space-y-0">
                {[
                  { title: "Interior Design", desc: "Crafting atmospheres of understated elegance.", icon: "◇" },
                  { title: "Architecture", desc: "Designing structures that endure.", icon: "△" },
                  { title: "3D Visualization", desc: "Photorealistic renders that bring visions to life.", icon: "○" },
                  { title: "Animation", desc: "Cinematic walkthroughs of unbuilt spaces.", icon: "□" },
                ].map((service, index) => (
                  <AnimatedSection key={service.title} delay={index * 0.1}>
                    <motion.div
                      className="py-8 border-b border-border group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-start justify-between gap-8">
                        <div className="flex gap-6">
                          <span className="text-2xl text-accent/50 group-hover:text-accent transition-colors">
                            {service.icon}
                          </span>
                          <div>
                            <h3 className="font-serif text-2xl font-light">{service.title}</h3>
                            <p className="mt-2 text-body text-muted-foreground">{service.desc}</p>
                          </div>
                        </div>
                        <motion.span
                          className="text-muted-foreground text-xl"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 right-20 w-40 h-40 border border-white/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-60 h-60 border border-white/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-editorial text-center relative">
          <AnimatedSection>
            <h2 className="text-headline max-w-2xl mx-auto">
              Every project begins with a conversation.
            </h2>
            <p className="mt-6 text-body text-primary-foreground/60 max-w-lg mx-auto">
              Let's discuss how we can transform your vision into a space that inspires.
            </p>
            <motion.div className="mt-10" whileHover={{ scale: 1.02 }}>
              <Link
                to="/contact"
                className="inline-block btn-premium border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground btn-glow"
              >
                Get in Touch
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
