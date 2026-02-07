import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Contact</span>
            <h1 className="mt-4 text-display max-w-4xl">
              Begin a Conversation
            </h1>
            <p className="mt-8 text-subhead text-muted-foreground max-w-xl">
              Every project begins with a conversation. Tell us about your vision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <AnimatedSection className="lg:col-span-7" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="text-label text-muted-foreground block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-4 text-body focus:outline-none focus:border-foreground transition-colors duration-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-label text-muted-foreground block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-4 text-body focus:outline-none focus:border-foreground transition-colors duration-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="text-label text-muted-foreground block mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-4 text-body focus:outline-none focus:border-foreground transition-colors duration-500 cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="interior">Interior Design</option>
                    <option value="architecture">Architecture</option>
                    <option value="visualization">3D Visualization</option>
                    <option value="animation">Animation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-label text-muted-foreground block mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-4 text-body focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 text-label border-b border-foreground pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-500"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-5" delay={0.4}>
              <div className="space-y-12">
                <div>
                  <span className="text-label text-muted-foreground">Email</span>
                  <p className="mt-3 text-body">
                    <a href="mailto:hello@atelier-studio.com" className="link-underline">
                      hello@atelier-studio.com
                    </a>
                  </p>
                </div>

                <div>
                  <span className="text-label text-muted-foreground">Phone</span>
                  <p className="mt-3 text-body">+1 (555) 123-4567</p>
                </div>

                <div>
                  <span className="text-label text-muted-foreground">Studio</span>
                  <p className="mt-3 text-body text-muted-foreground">
                    123 Design District<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>

                <div>
                  <span className="text-label text-muted-foreground">Hours</span>
                  <p className="mt-3 text-body text-muted-foreground">
                    Monday — Friday<br />
                    9:00 AM — 6:00 PM EST
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
