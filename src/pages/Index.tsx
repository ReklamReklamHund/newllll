import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, BookOpen, Globe, Star, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "2,500+", label: "Successful Students" },
  { icon: BookOpen, value: "24", label: "Expert Instructors" },
  { icon: Globe, value: "8", label: "Languages Offered" },
];

const programs = [
  { name: "English (ESL)", levels: "A1–C2", price: "$299", flag: "🇺🇸" },
  { name: "Spanish", levels: "A1–C2", price: "$299", flag: "🇪🇸" },
  { name: "French", levels: "A1–B2", price: "$299", flag: "🇫🇷" },
  { name: "German", levels: "A1–C1", price: "$299", flag: "🇩🇪" },
  { name: "Mandarin", levels: "A1–B2", price: "$319", flag: "🇨🇳" },
  { name: "Japanese", levels: "A1–B2", price: "$319", flag: "🇯🇵" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    program: "Spanish Program Graduate",
    quote: "I went from beginner to B2 in just 18 months. The instructors are patient, knowledgeable, and the small class sizes made all the difference.",
    rating: 5,
    before: "A1",
    after: "B2",
  },
  {
    name: "James Chen",
    program: "French Program Graduate",
    quote: "The instructors don't just teach grammar; they teach you how to think in the language. I moved to Paris and felt completely prepared.",
    rating: 5,
    before: "A2",
    after: "C1",
  },
  {
    name: "Priya Patel",
    program: "German Program Graduate",
    quote: "Learning German seemed impossible with my busy schedule, but the flexible online classes made it work. My colleagues are impressed!",
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
            alt="Diverse students learning together in a bright classroom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative container mx-auto px-4 md:px-6 pt-0 lg:pt-2 pb-20 lg:pb-28">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Företag i Sverige spenderar omkring     
                6-8 miljarder på reklam artiklar per år.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl">
                Svenska företag lägger miljarder på reklamartiklar varje år men hur vet ni att ni har fått det bästa priset? Djungeln av leverantörer gör det krångligt och tidskrävande att jämföra.

                Vi på ReklamArtiklarUF gör jobbet åt er. Så istället för att kasta pengar i sjön. kolla igenom våra bästa produkter eller kontakta oss så hittar vi det ni vill ha.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/placement-test">Take Free Placement Test</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold" asChild>
                  <Link to="/programs">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Language Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From complete beginner to professional proficiency — group classes, private lessons, online, and intensive formats.</p>
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
                  <p className="text-muted-foreground text-sm mb-4">Group classes, private lessons, online & intensive options available.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">from</span>
                    <span className="text-2xl font-extrabold text-primary font-heading">{prog.price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild>
                <Link to="/programs">View All Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Why Lingua Bridge?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Native Expert Instructors", desc: "All instructors are native or near-native speakers with advanced teaching certifications." },
                { title: "Small Class Sizes", desc: "8–12 students per group class ensures personalized attention and faster progress." },
                { title: "Flexible Scheduling", desc: "Weekday, evening, weekend, and online options to fit your lifestyle." },
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
              <p className="text-muted-foreground">Real results from real students.</p>
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
                <Link to="/stories">Read More Stories <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary section-padding">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Language Journey?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Take our free placement test to find your level, then explore class options that fit your schedule.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/placement-test">Take Free Placement Test</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold" asChild>
                <Link to="/enroll">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
