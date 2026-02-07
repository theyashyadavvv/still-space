import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="flex items-end justify-between gap-8">
              <div>
                <span className="text-label text-muted-foreground">Portfolio</span>
                <h1 className="mt-4 text-display max-w-4xl">Selected Work</h1>
              </div>
              <div className="hidden md:block">
                <span className="font-serif text-7xl lg:text-8xl text-muted-foreground/20 font-light">
                  {String(filteredProjects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="pb-16">
        <div className="container-editorial">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-6 md:gap-10 border-b border-border pb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative group"
                >
                  <span
                    className={`text-caption transition-colors duration-500 ${
                      activeCategory === category
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {category}
                  </span>
                  <motion.div
                    className="absolute -bottom-6 left-0 right-0 h-px bg-foreground"
                    initial={false}
                    animate={{
                      scaleX: activeCategory === category ? 1 : 0,
                      opacity: activeCategory === category ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </button>
              ))}
            </div>
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
                <div className="relative overflow-hidden">
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
                  
                  {/* Elegant overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: hoveredProject === featuredProject.id ? 0.7 : 0.4 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                    <div className="flex justify-between items-start">
                      <span className="text-label text-primary-foreground/60">Featured</span>
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
                          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-primary-foreground font-light">
                            {featuredProject.title}
                          </h2>
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="hidden md:flex items-center gap-3 text-primary-foreground/80"
                        animate={{ x: hoveredProject === featuredProject.id ? 0 : 10, opacity: hoveredProject === featuredProject.id ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-caption">View Project</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      {/* Projects Grid - Staggered Masonry */}
      <section className="pb-32">
        <div className="container-editorial">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {gridProjects.map((project, index) => {
                // Create staggered masonry effect
                const isLarge = index % 3 === 0;
                const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";
                const aspectRatio = isLarge ? "aspect-[4/3]" : "aspect-[3/4]";
                const projectNumber = String(index + 2).padStart(2, "0");

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={colSpan}
                  >
                    <Link
                      to="#"
                      className="group block relative"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className={`relative overflow-hidden ${aspectRatio}`}>
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />
                        
                        {/* Hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-foreground/50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                        />
                        
                        {/* Project number watermark */}
                        <div className="absolute top-6 right-6">
                          <span className="font-serif text-4xl md:text-5xl text-primary-foreground/10 font-light group-hover:text-primary-foreground/30 transition-colors duration-500">
                            {projectNumber}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <motion.div
                          className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
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
                      </div>
                      
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
              <p className="text-subhead text-muted-foreground max-w-xl mx-auto">
                Every space tells a story of meticulous craft and timeless design.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-8 text-caption hover:text-muted-foreground transition-colors duration-300"
              >
                <span>Start Your Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
