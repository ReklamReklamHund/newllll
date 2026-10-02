import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Main Campus",
    address: "125 Language Boulevard, Suite 300, Metro City, ST 12345",
    phone: "(555) 123-4567",
    email: "info@linguabridge.academy",
    hours: "Mon–Fri 8:00 AM – 9:00 PM, Sat 9 AM – 5 PM, Sun 10 AM – 3 PM",
    parking: "Free parking in building garage, entrance on Oak Street",
    transit: "Metro Line 2 (Language Center Station), Bus Routes 15, 22, 44",
  },
  {
    name: "Downtown Location",
    address: "789 Central Avenue, Downtown Metro City, ST 12301",
    phone: "(555) 123-4568",
    email: "downtown@linguabridge.academy",
    hours: "Mon–Fri 9:00 AM – 8:00 PM, Sat 10 AM – 4 PM, Closed Sunday",
    parking: "Street parking and nearby garage ($5/hour)",
    transit: "Metro Lines 1 & 3 (Central Station), Bus Routes 8, 12, 30",
  },
];

const faqs = [
  { q: "Do I need to take a placement test?", a: "Yes, unless you're a complete beginner. The test helps us place you at the right level." },
  { q: "What is your cancellation policy?", a: "We offer a 14-day money-back guarantee. Private lessons can be cancelled up to 48 hours in advance." },
  { q: "Can I switch classes after enrolling?", a: "Yes, within the first two sessions of a new term." },
  { q: "Do you offer corporate/group discounts?", a: "Yes, 15% discount for groups of 5 or more employees." },
  { q: "Are materials included in tuition?", a: "Yes, all digital course materials are included." },
  { q: "Do you offer visa documentation?", a: "Yes, for students enrolled in intensive programs." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">We'd love to hear from you. Visit us, call, or send us a message.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Locations */}
              <div className="space-y-8">
                <h2 className="font-heading text-2xl font-bold text-foreground">Our Locations</h2>
                {locations.map((loc) => (
                  <div key={loc.name} className="card-elevated">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">{loc.name}</h3>
                    <div className="bg-muted rounded-lg h-40 flex items-center justify-center text-muted-foreground text-sm mb-4">
                      📍 Map View
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
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form className="card-elevated space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
                    <input id="name" type="text" required className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:border-primary" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email <span className="text-destructive">*</span></label>
                    <input id="email" type="email" required className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:border-primary" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-foreground mb-1.5">Language of Interest</label>
                    <select id="language" className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background focus:border-primary">
                      <option value="">Select a language</option>
                      {["English (ESL)", "Spanish", "French", "German", "Mandarin", "Japanese", "Italian", "Portuguese"].map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-destructive">*</span></label>
                    <textarea id="message" required rows={4} className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:border-primary resize-y" placeholder="How can we help?" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 font-semibold text-foreground flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <span className="text-muted-foreground ml-2">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
