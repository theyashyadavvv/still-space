import { Link } from "react-router-dom";

const footerLinks = [
  { path: "/studio", label: "Studio" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl font-light tracking-wide">
              ATELIER
            </Link>
            <p className="mt-6 text-body text-muted-foreground max-w-xs">
              Architecture and interior design studio crafting spaces of quiet luxury.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <span className="text-label text-muted-foreground">Navigation</span>
            <nav className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-body text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <span className="text-label text-muted-foreground">Contact</span>
            <div className="mt-6 space-y-4">
              <p className="text-body text-muted-foreground">
                hello@atelier-studio.com
              </p>
              <p className="text-body text-muted-foreground">
                +1 (555) 123-4567
              </p>
              <p className="text-body text-muted-foreground">
                New York, NY
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} Atelier Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-500">
              Instagram
            </a>
            <a href="#" className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
