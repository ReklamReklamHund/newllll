import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-xl text-background mb-4">
              <GraduationCap className="h-7 w-7" />
              <span>ReklamArtiklarUF</span>
            </Link>
            <p className="text-sm leading-relaxed text-background/60">
              Professionell språkundervisning i 8 språk med flexibla tider och beprövade resultat.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-4">Kontakta oss</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Språkvägen 125, 123 45 Stockholm</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>08-123 456 78</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@reklamartiklaruf.se</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} ReklamArtiklarUF. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
