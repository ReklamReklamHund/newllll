import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-xl text-background mb-4">
              <GraduationCap className="h-7 w-7" />
              <span>Lingua Bridge</span>
            </Link>
            <p className="text-sm leading-relaxed text-background/60">
              Professional language instruction in 8 languages with flexible scheduling and proven results.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              {["English (ESL)", "Spanish", "French", "German", "Mandarin", "Japanese"].map((lang) => (
                <li key={lang}>
                  <Link to="/programs" className="hover:text-background transition-colors">{lang}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/placement-test" className="hover:text-background transition-colors">Placement Test</Link></li>
              <li><Link to="/schedule" className="hover:text-background transition-colors">Class Schedule</Link></li>
              <li><Link to="/instructors" className="hover:text-background transition-colors">Our Instructors</Link></li>
              <li><Link to="/enroll" className="hover:text-background transition-colors">Enroll Now</Link></li>
              <li><Link to="/stories" className="hover:text-background transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>125 Language Blvd, Suite 300, Metro City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@linguabridge.academy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Lingua Bridge Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
