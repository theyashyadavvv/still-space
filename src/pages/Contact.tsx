import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
  };

  const inputClasses = (field: string) => `
    w-full bg-transparent border-b-2 py-4 text-body 
    focus:outline-none transition-all duration-500
    ${focusedField === field || formData[field as keyof typeof formData]
      ? "border-foreground"
      : "border-border hover:border-muted-foreground"
    }
  `;

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
              Contact
            </motion.span>
            <motion.h1
              className="mt-4 text-display max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Begin a Conversation
            </motion.h1>
            <motion.p
              className="mt-8 text-subhead text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Every project begins with a conversation. Tell us about your vision.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <AnimatedSection className="lg:col-span-7" delay={0.2}>
              {isSubmitted ? (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <span className="text-3xl">✓</span>
                  </motion.div>
                  <h2 className="text-headline">Thank You!</h2>
                  <p className="mt-4 text-body text-muted-foreground">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="text-label text-muted-foreground block mb-3">
                      Name
                    </label>
                    <motion.div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("name")}
                        required
                        placeholder="Your name"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="text-label text-muted-foreground block mb-3">
                      Email
                    </label>
                    <motion.div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("email")}
                        required
                        placeholder="your@email.com"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="projectType" className="text-label text-muted-foreground block mb-3">
                      Project Type
                    </label>
                    <motion.div className="relative">
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses("projectType")} cursor-pointer appearance-none`}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="interior">Interior Design</option>
                        <option value="architecture">Architecture</option>
                        <option value="visualization">3D Visualization</option>
                        <option value="animation">Animation</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        ↓
                      </span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="text-label text-muted-foreground block mb-3">
                      Message
                    </label>
                    <motion.div className="relative">
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`${inputClasses("message")} resize-none`}
                        required
                        placeholder="Tell us about your project..."
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="btn-premium relative overflow-hidden"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {isSubmitting ? (
                      <motion.span
                        className="inline-flex items-center gap-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </motion.span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-5" delay={0.4}>
              <div className="space-y-10">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-label text-muted-foreground">Email</span>
                  <p className="mt-3 text-body">
                    <a href="mailto:hello@atelier-studio.com" className="link-underline hover:text-accent transition-colors">
                      hello@atelier-studio.com
                    </a>
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-label text-muted-foreground">Phone</span>
                  <p className="mt-3 text-body">+1 (555) 123-4567</p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-label text-muted-foreground">Studio</span>
                  <p className="mt-3 text-body text-muted-foreground">
                    123 Design District<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-label text-muted-foreground">Hours</span>
                  <p className="mt-3 text-body text-muted-foreground">
                    Monday — Friday<br />
                    9:00 AM — 6:00 PM EST
                  </p>
                </motion.div>

                {/* Map placeholder */}
                <motion.div
                  className="mt-8 aspect-[4/3] rounded-lg bg-muted/50 overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xl">📍</span>
                      </motion.div>
                      <p className="text-caption text-muted-foreground">New York, NY</p>
                    </div>
                  </div>
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
