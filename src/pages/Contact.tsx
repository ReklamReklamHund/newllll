import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Huvudkontor",
    address: "Språkvägen 125, 123 45 Stockholm",
    phone: "08-123 456 78",
    email: "info@reklamartiklaruf.se",
    hours: "Mån–fre 08:00–21:00, lör 09:00–17:00, sön 10:00–15:00",
    parking: "Gratis parkering i husets garage, ingång från Ekgatan",
    transit: "Tunnelbana linje 2 (Språkcentrum), buss 15, 22, 44",
  },
  {
    name: "Citykontor",
    address: "Centralgatan 789, 111 22 Stockholm",
    phone: "08-123 456 79",
    email: "city@reklamartiklaruf.se",
    hours: "Mån–fre 09:00–20:00, lör 10:00–16:00, stängt söndagar",
    parking: "Gatuparkering och närliggande garage (50 kr/tim)",
    transit: "Tunnelbana linje 1 och 3 (Centralstationen), buss 8, 12, 30",
  },
];


export default function Contact() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Kontakta oss</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Vi hör gärna från dig. Besök oss, ring eller skicka ett meddelande.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Locations */}
              <div className="space-y-8">
                <h2 className="font-heading text-2xl font-bold text-foreground">Våra kontor</h2>
                {locations.map((loc) => (
                  <div key={loc.name} className="card-elevated">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">{loc.name}</h3>
                    <div className="bg-muted rounded-lg h-40 flex items-center justify-center text-muted-foreground text-sm mb-4">
                      📍 Kartvy
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{loc.address}</span></div>
                      <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /><span>{loc.phone}</span></div>
                      <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /><span>{loc.email}</span></div>
                      <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{loc.hours}</span></div>
                      <div className="flex items-start gap-2"><Car className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{loc.parking}</span></div>
                      <div className="flex items-start gap-2"><Bus className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{loc.transit}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Skicka ett meddelande</h2>
                <form className="card-elevated space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Namn <span className="text-destructive">*</span></label>
                    <input id="name" type="text" required className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:border-primary" placeholder="Ditt fullständiga namn" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">E-post <span className="text-destructive">*</span></label>
                    <input id="email" type="email" required className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:border-primary" placeholder="du@exempel.se" />
                  </div>
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-foreground mb-1.5">Språk du är intresserad av</label>
                    <select id="language" className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background focus:border-primary">
                      <option value="">Välj ett språk</option>
                      {["Engelska", "Spanska", "Franska", "Tyska", "Mandarin", "Japanska", "Italienska", "Portugisiska"].map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Meddelande <span className="text-destructive">*</span></label>
                    <textarea id="message" required rows={4} className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:border-primary resize-y" placeholder="Hur kan vi hjälpa dig?" />
                  </div>
                  <Button type="submit" className="w-full">Skicka meddelande</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
