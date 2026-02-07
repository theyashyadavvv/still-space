import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const services = [
  {
    title: "Interior Design",
    description: "Creating atmospheres of understated elegance through careful material selection and spatial planning.",
    image: project1,
  },
  {
    title: "Architecture",
    description: "Designing structures that respond to context, light, and the rhythms of daily life.",
    image: project2,
  },
  {
    title: "3D Visualization",
    description: "Photorealistic renders that communicate design intent with precision and clarity.",
    image: project3,
  },
  {
    title: "Architectural Animation",
    description: "Cinematic walkthroughs that allow clients to experience unbuilt spaces.",
    image: project4,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="container-editorial">
          <AnimatedSection>
            <span className="text-label text-muted-foreground">Services</span>
            <h1 className="mt-4 text-display max-w-4xl">
              Our Expertise
            </h1>
            <p className="mt-8 text-subhead text-muted-foreground max-w-2xl">
              Four disciplines, one philosophy: restraint, precision, and spaces that endure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`border-t border-border ${index === services.length - 1 ? "border-b" : ""}`}
          >
            <div className="container-editorial">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 md:py-24">
                <AnimatedSection className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] image-reveal">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  className={`lg:col-span-6 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  delay={0.2}
                >
                  <span className="text-label text-muted-foreground">0{index + 1}</span>
                  <h2 className="mt-4 text-headline">{service.title}</h2>
                  <p className="mt-6 text-body text-muted-foreground max-w-md">
                    {service.description}
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Services;
