import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroImage from "@/assets/hero-interior.jpg";

const projects = [
  {
    id: 1,
    title: "Hillside Residence",
    category: "Interior Design",
    location: "Malibu, California",
    year: "2024",
    image: project1,
    featured: true,
  },
  {
    id: 2,
    title: "Urban Kitchen",
    category: "Renovation",
    location: "New York, NY",
    year: "2024",
    image: project2,
  },
  {
    id: 3,
    title: "Garden Retreat",
    category: "Architecture",
    location: "Connecticut",
    year: "2023",
    image: project3,
  },
  {
    id: 4,
    title: "Executive Suite",
    category: "Commercial",
    location: "Chicago, IL",
    year: "2023",
    image: project4,
  },
  {
    id: 5,
    title: "Modernist Villa",
    category: "Architecture",
    location: "Palm Springs, CA",
    year: "2023",
    image: heroImage,
  },
  {
    id: 6,
    title: "Penthouse Living",
    category: "Interior Design",
    location: "Miami, FL",
    year: "2022",
    image: project1,
  },
];

const categories = ["All", "Interior Design", "Architecture", "Renovation", "Commercial"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-32 md:pt-40 pb-16" ref={headerRef}>
        <div className="container-editorial">
          <AnimatedSection>
            <div className="flex items-end justify-between gap-8">
              <div>
                <motion.span
                  className="text-label text-muted-foreground inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  Portfolio
                </motion.span>
                <motion.h1
                  className="mt-4 text-display max-w-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Selected Work
                </motion.h1>
              </div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={headerInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="font-serif text-7xl lg:text-8xl gradient-text-gold font-light">
                  {String(filteredProjects.length).padStart(2, "0")}
                </span>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="pb-16">
        <div className="container-editorial">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4 md:gap-6 pb-6 relative">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-6 py-3 rounded-full text-caption transition-all duration-300 ${activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-foreground -z-10"
                      layoutId="activeFilter"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-border via-accent/30 to-border" />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="pb-16">
          <div className="container-editorial">
            <AnimatedSection delay={0.3}>
              <Link
                to="#"
                className="group block relative"
                onMouseEnter={() => setHoveredProject(featuredProject.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <motion.div
                    className="aspect-[21/9]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Premium gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: hoveredProject === featuredProject.id ? 0.8 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                    <div className="flex justify-between items-start">
                      <motion.span
                        className="text-label text-primary-foreground/60 glass-dark px-4 py-2 rounded-full"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        Featured
                      </motion.span>
                      <span className="font-serif text-6xl md:text-8xl text-primary-foreground/10 font-light">
                        01
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <span className="text-caption text-primary-foreground/60">
                            {featuredProject.location} — {featuredProject.year}
                          </span>
                          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-primary-foreground font-light text-glow">
                            {featuredProject.title}
                          </h2>
                        </motion.div>
                      </div>

                      <motion.div
                        className="hidden md:flex items-center gap-3 text-primary-foreground/80 glass-dark px-6 py-3 rounded-full"
                        animate={{
                          x: hoveredProject === featuredProject.id ? 0 : 20,
                          opacity: hoveredProject === featuredProject.id ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-caption">View Project</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Projects Grid - Enhanced Masonry */}
      <section className="pb-32">
        <div className="container-editorial">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {gridProjects.map((project, index) => {
                const isLarge = index % 3 === 0;
                const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";
                const aspectRatio = isLarge ? "aspect-[4/3]" : "aspect-[3/4]";
                const projectNumber = String(index + 2).padStart(2, "0");

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={colSpan}
                  >
                    <Link
                      to="#"
                      className="group block relative perspective-1000"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <motion.div
                        className={`relative overflow-hidden rounded-lg ${aspectRatio}`}
                        whileHover={{ rotateX: 2, rotateY: -3 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {/* Gradient overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                        />

                        {/* Project number watermark */}
                        <div className="absolute top-6 right-6">
                          <motion.span
                            className="font-serif text-4xl md:text-5xl text-white/10 font-light"
                            animate={{
                              color: hoveredProject === project.id
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {projectNumber}
                          </motion.span>
                        </div>

                        {/* Content */}
                        <motion.div
                          className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 20
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <span className="text-caption text-primary-foreground/60">
                            {project.category} — {project.year}
                          </span>
                          <h3 className="mt-2 font-serif text-xl md:text-2xl text-primary-foreground font-light">
                            {project.title}
                          </h3>
                          <span className="mt-1 text-caption text-primary-foreground/60">
                            {project.location}
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Mobile info */}
                      <div className="mt-4 md:hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-caption text-muted-foreground">
                            {project.category}
                          </span>
                          <span className="font-serif text-2xl text-muted-foreground/30">
                            {projectNumber}
                          </span>
                        </div>
                        <h3 className="mt-1 font-serif text-xl font-light">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="border-t border-border pt-16 text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-8 rounded-full border border-accent/30 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl gradient-text-gold">✦</span>
              </motion.div>
              <p className="text-subhead text-muted-foreground max-w-xl mx-auto">
                Every space tells a story of meticulous craft and timeless design.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-8 btn-premium"
              >
                <span>Start Your Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
