import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Luxury interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </motion.div>

        <div className="relative h-full flex items-end pb-20 md:pb-32">
          <div className="container-editorial">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary-foreground max-w-4xl"
            >
              Spaces of Quiet Luxury
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-subhead text-primary-foreground/80 max-w-xl"
            >
              Architecture and interior design where restraint meets refinement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/projects"
                className="inline-block mt-10 text-label text-primary-foreground border-b border-primary-foreground/50 pb-2 hover:border-primary-foreground transition-colors duration-500"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <span className="text-label text-muted-foreground">Philosophy</span>
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
                className="inline-block mt-10 text-label link-underline"
              >
                About Our Studio
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
                className="hidden md:inline-block text-label link-underline"
              >
                View All Projects
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.15}>
                <Link to="/projects" className="group block">
                  <div className="image-reveal aspect-[4/5]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
            className="md:hidden inline-block mt-12 text-label link-underline"
          >
            View All Projects
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
                className="inline-block mt-8 text-label link-underline"
              >
                Learn More
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-8">
              <div className="space-y-0">
                {[
                  { title: "Interior Design", desc: "Crafting atmospheres of understated elegance." },
                  { title: "Architecture", desc: "Designing structures that endure." },
                  { title: "3D Visualization", desc: "Photorealistic renders that bring visions to life." },
                  { title: "Animation", desc: "Cinematic walkthroughs of unbuilt spaces." },
                ].map((service, index) => (
                  <AnimatedSection key={service.title} delay={index * 0.1}>
                    <div className="py-8 border-b border-border group">
                      <div className="flex items-start justify-between gap-8">
                        <div>
                          <h3 className="font-serif text-2xl font-light">{service.title}</h3>
                          <p className="mt-2 text-body text-muted-foreground">{service.desc}</p>
                        </div>
                        <span className="text-muted-foreground group-hover:translate-x-2 transition-transform duration-500">
                          →
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <h2 className="text-headline max-w-2xl mx-auto">
              Every project begins with a conversation.
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-10 text-label border-b border-primary-foreground/50 pb-2 hover:border-primary-foreground transition-colors duration-500"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
