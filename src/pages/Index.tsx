import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, BookOpen, Globe, Star, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { icon: Award, value: "15+", label: "År av excellens" },
  { icon: Users, value: "2 500+", label: "Nöjda elever" },
  { icon: BookOpen, value: "24", label: "Expertlärare" },
  { icon: Globe, value: "8", label: "Språk att välja på" },
];

const programs = [
  { name: "Engelska", levels: "A1–C2", price: "2 990 kr", flag: "🇺🇸" },
  { name: "Spanska", levels: "A1–C2", price: "2 990 kr", flag: "🇪🇸" },
  { name: "Franska", levels: "A1–B2", price: "2 990 kr", flag: "🇫🇷" },
  { name: "Tyska", levels: "A1–C1", price: "2 990 kr", flag: "🇩🇪" },
  { name: "Mandarin", levels: "A1–B2", price: "3 190 kr", flag: "🇨🇳" },
  { name: "Japanska", levels: "A1–B2", price: "3 190 kr", flag: "🇯🇵" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    program: "Examinerad från spanskaprogrammet",
    quote: "Jag gick från nybörjare till B2 på bara 18 månader. Lärarna är tålmodiga och kunniga, och de små grupperna gjorde hela skillnaden.",
    rating: 5,
    before: "A1",
    after: "B2",
  },
  {
    name: "James Chen",
    program: "Examinerad från franskaprogrammet",
    quote: "Lärarna lär inte bara ut grammatik – de lär dig att tänka på språket. Jag flyttade till Paris och kände mig helt förberedd.",
    rating: 5,
    before: "A2",
    after: "C1",
  },
  {
    name: "Priya Patel",
    program: "Examinerad från tyskaprogrammet",
    quote: "Att lära sig tyska verkade omöjligt med mitt schema, men de flexibla onlinekurserna fick det att funka. Mina kollegor är imponerade!",
    rating: 5,
    before: "A1",
    after: "B1",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[460px] lg:min-h-[540px] flex items-center">
          <img
            src={heroImage}
            alt="Elever som lär sig tillsammans i ett ljust klassrum"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative container mx-auto px-4 md:px-6 pt-2 lg:pt-4 pb-16 lg:pb-24">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Företag i Sverige spenderar omkring      
                6-8 miljarder på reklam artiklar per år.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl">
                Svenska företag lägger miljarder på reklamartiklar varje år men hur vet ni att ni har fått det bästa priset? Djungeln av leverantörer gör det krångligt och tidskrävande att jämföra.

                Vi på ReklamArtiklarUF gör jobbet åt er. Så istället för att kasta pengar i sjön. kolla igenom våra bästa produkter eller kontakta oss så hittar vi det ni vill ha.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/placement-test">Butik</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold" asChild>
                  <Link to="/programs">Kontakta oss <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Programs Preview */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Våra språkprogram</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Från helt nybörjare till professionell nivå – gruppkurser, privatlektioner, online och intensivkurser.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((prog) => (
                <Link to="/programs" key={prog.name} className="card-interactive group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{prog.flag}</span>
                    <h3 className="text-xl font-bold font-heading text-foreground">{prog.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{prog.levels}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Gruppkurser, privatlektioner, online och intensivkurser.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">från</span>
                    <span className="text-2xl font-extrabold text-primary font-heading">{prog.price}</span>
                    <span className="text-sm text-muted-foreground">/månad</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild>
                <Link to="/programs">Se alla program <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Varför välja oss?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Lärare med modersmål", desc: "Alla lärare har språket som modersmål eller nära modersmål, med avancerade undervisningscertifikat." },
                { title: "Små grupper", desc: "8–12 elever per grupp ger personlig uppmärksamhet och snabbare framsteg." },
                { title: "Flexibla tider", desc: "Vardagar, kvällar, helger och online – vi anpassar oss efter ditt liv." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <CheckCircle className="h-10 w-10 mx-auto mb-4 text-success" />
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Våra elevers framgångar</h2>
              <p className="text-muted-foreground">Verkliga resultat från verkliga elever.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="card-elevated">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.program}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium">
                      <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t.before}</span>
                      <ArrowRight className="h-3 w-3 text-success" />
                      <span className="px-2 py-0.5 rounded-full bg-success/10 text-success">{t.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/stories">Läs fler historier <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary section-padding">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Redo att börja din språkresa?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Gör vårt kostnadsfria nivåtest för att hitta din nivå, och utforska sedan kurser som passar ditt schema.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/placement-test">Gör det kostnadsfria nivåtestet</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold" asChild>
                <Link to="/enroll">Anmäl dig nu</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
