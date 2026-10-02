import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Instructors", href: "/instructors" },
  { label: "Schedule", href: "/schedule" },
  { label: "Success Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 h-16" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-xl text-foreground">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span>ReklamArtiklarUF</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/placement-test">Placement Test</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link to="/enroll">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-4 pb-4">
          <ul className="space-y-1 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <Button variant="outline" size="sm" asChild>
              <Link to="/placement-test" onClick={() => setMobileOpen(false)}>Placement Test</Link>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <Link to="/enroll" onClick={() => setMobileOpen(false)}>Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
