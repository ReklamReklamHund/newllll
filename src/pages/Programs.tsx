import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    name: "English (ESL)", flag: "🇺🇸", levels: "A1–C2",
    formats: ["Group Classes", "Private Lessons", "Online", "Intensive"],
    prices: { group: "$299/mo", private: "$65/hr", online: "$249/mo", intensive: "$899 (4 wks)" },
    desc: "Comprehensive English instruction for speakers of other languages. IELTS/TOEFL prep, business communication, and academic English.",
  },
  {
    name: "Spanish", flag: "🇪🇸", levels: "A1–C2",
    formats: ["Group Classes", "Private Lessons", "Online", "Weekend Workshops"],
    prices: { group: "$299/mo", private: "$65/hr", online: "$249/mo" },
    desc: "From conversational basics to business fluency. Explore Hispanic culture while mastering grammar and communication.",
  },
  {
    name: "French", flag: "🇫🇷", levels: "A1–B2",
    formats: ["Group Classes", "Private Lessons", "Online"],
    prices: { group: "$299/mo", private: "$65/hr", online: "$249/mo" },
    desc: "Blend linguistic precision with cultural immersion. DELF/DALF preparation and French literature.",
  },
  {
    name: "German", flag: "🇩🇪", levels: "A1–C1",
    formats: ["Group Classes", "Private Lessons", "Intensive"],
    prices: { group: "$299/mo", private: "$65/hr", intensive: "$899 (4 wks)" },
    desc: "Systematic instruction that makes German grammar achievable. Academic and technical language specialties.",
  },
  {
    name: "Mandarin Chinese", flag: "🇨🇳", levels: "A1–B2",
    formats: ["Group Classes", "Private Lessons", "Online"],
    prices: { group: "$319/mo", private: "$70/hr", online: "$269/mo" },
    desc: "Character writing, tonal accuracy, and business Mandarin. HSK preparation available.",
  },
  {
    name: "Japanese", flag: "🇯🇵", levels: "A1–B2",
    formats: ["Group Classes", "Private Lessons", "Weekend Workshops"],
    prices: { group: "$319/mo", private: "$70/hr" },
    desc: "JLPT preparation, keigo (honorific language), and cultural immersion through modern and traditional content.",
  },
  {
    name: "Italian", flag: "🇮🇹", levels: "A1–B1",
    formats: ["Group Classes", "Private Lessons"],
    prices: { group: "$299/mo", private: "$65/hr" },
    desc: "Discover the beauty of Italian language and culture. Conversational focus with grammar foundations.",
  },
  {
    name: "Portuguese", flag: "🇧🇷", levels: "A1–B1",
    formats: ["Group Classes", "Private Lessons", "Online"],
    prices: { group: "$299/mo", private: "$65/hr", online: "$249/mo" },
    desc: "Brazilian and European Portuguese options. Business and travel-focused programs.",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Language Programs</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">8 languages, all proficiency levels, multiple formats to fit your life.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((prog) => (
                <div key={prog.name} className="card-interactive flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{prog.flag}</span>
                    <h2 className="text-2xl font-bold font-heading text-foreground">{prog.name}</h2>
                  </div>
                  <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                    Levels {prog.levels}
                  </span>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{prog.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {prog.formats.map((f) => (
                      <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{f}</span>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-sm text-muted-foreground">from</span>
                      <span className="text-2xl font-extrabold text-primary font-heading">{Object.values(prog.prices)[0].split("/")[0]}</span>
                      <span className="text-sm text-muted-foreground">/{Object.values(prog.prices)[0].split("/")[1] || "session"}</span>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      {Object.entries(prog.prices).map(([key, val]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}</span>
                          <span className="font-medium text-foreground">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary section-padding">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Not Sure Which Level?</h2>
            <p className="text-primary-foreground/80 mb-8">Take our free placement test to find your perfect starting point.</p>
            <Button variant="hero" asChild>
              <Link to="/placement-test">Take Free Placement Test <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
