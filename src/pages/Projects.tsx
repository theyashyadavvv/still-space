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
    image: project1,
  },
  {
    id: 2,
    title: "Urban Kitchen",
    category: "Renovation",
    location: "New York, NY",
    image: project2,
  },
  {
    id: 3,
    title: "Garden Retreat",
    category: "Architecture",
    location: "Connecticut",
    image: project3,
  },
  {
    id: 4,
    title: "Executive Suite",
    category: "Commercial",
    location: "Chicago, IL",
    image: project4,
  },
  {
    id: 5,
    title: "Modernist Villa",
    category: "Architecture",
    location: "Palm Springs, CA",
    image: heroImage,
  },
  {
    id: 6,
    title: "Penthouse Living",
    category: "Interior Design",
    location: "Miami, FL",
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

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Portfolio</span>
            <h1 className="mt-4 text-display max-w-4xl">Selected Work</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container-editorial">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-caption transition-colors duration-500 ${
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container-editorial">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to="#"
                    className="group block relative"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="image-reveal aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-foreground/40 flex items-end p-8"
                      >
                        <div>
                          <span className="text-caption text-primary-foreground/70">
                            {project.location}
                          </span>
                          <h3 className="mt-2 font-serif text-2xl text-primary-foreground font-light">
                            {project.title}
                          </h3>
                        </div>
                      </motion.div>
                    </div>
                    <div className="mt-4 md:hidden">
                      <span className="text-caption text-muted-foreground">
                        {project.category}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-light">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
