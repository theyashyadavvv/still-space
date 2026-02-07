import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/studio", label: "Studio" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/visualization", label: "Visualization" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
          }`}
      >
        {/* Gradient border on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <nav className="container-editorial">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Animated Logo */}
            <Link to="/" className="group relative">
              <motion.span
                className="font-serif text-xl md:text-2xl font-light tracking-wide text-foreground inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="gradient-text-gold">ATELIER</span>
              </motion.span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-accent to-accent/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.slice(1).map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`relative text-caption transition-colors duration-500 group ${location.pathname === link.path
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Active indicator */}
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                      initial={false}
                      animate={{
                        scaleX: location.pathname === link.path ? 1 : 0,
                        opacity: location.pathname === link.path ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Hover indicator */}
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-muted-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="btn-premium text-xs py-2 px-4"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-6 h-4">
                <motion.span
                  className="absolute left-0 w-full h-px bg-foreground"
                  animate={{
                    top: isOpen ? "50%" : "0%",
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? "-50%" : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 w-full h-px bg-foreground"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute left-0 w-full h-px bg-foreground"
                  animate={{
                    bottom: isOpen ? "50%" : "0%",
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? "50%" : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl floating-shape" />
            <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl floating-shape-delayed" />

            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`font-serif text-4xl md:text-5xl font-light transition-all duration-500 ${location.pathname === link.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:tracking-wider"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact info in mobile menu */}
              <motion.div
                className="absolute bottom-12 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-caption text-muted-foreground">hello@atelier-studio.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
