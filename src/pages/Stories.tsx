import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stories = [
  {
    name: "Sarah Mitchell", program: "Spanish", before: "A1", after: "B2", time: "18 months",
    quote: "I enrolled with zero Spanish knowledge. Now I conduct business meetings in Spanish and recently negotiated a contract with a client in Mexico City.",
    achievement: "Passed DELE B2 exam · Promoted to Regional Manager Latin America",
  },
  {
    name: "James Chen", program: "French", before: "A2", after: "C1", time: "2 years",
    quote: "The instructors here don't just teach grammar; they teach you how to think in the language. I moved to Paris for work and felt completely prepared.",
    achievement: "Accepted to Sorbonne University · DALF C1 certified",
  },
  {
    name: "Priya Patel", program: "German", before: "A1", after: "B1", time: "14 months",
    quote: "Learning German seemed impossible with my busy schedule, but the flexible online classes made it work. My German colleagues are impressed!",
    achievement: "Relocated to Berlin office · Goethe-Zertifikat B1",
  },
  {
    name: "Marcus Johnson", program: "Mandarin", before: "A0", after: "A2", time: "10 months",
    quote: "I always wanted to learn Mandarin but thought I was too old. This program proved age is just a number.",
    achievement: "HSK 3 certified · Planning extended trip to China",
  },
  {
    name: "Elena Rodriguez", program: "English (ESL)", before: "B1", after: "C2", time: "2.5 years",
    quote: "English proficiency opened doors I never imagined. I went from struggling with presentations to teaching university courses in English.",
    achievement: "PhD program acceptance · IELTS 8.5 · University instructor",
  },
];

const globalStats = [
  { value: "2,547", label: "Total Students" },
  { value: "78", label: "Countries Represented" },
  { value: "94%", label: "Exam Pass Rate" },
  { value: "4.8/5", label: "Satisfaction Rating" },
];

export default function Stories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Success Stories</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Real students, real results. See how Lingua Bridge transforms futures.</p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-card border-b border-border py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {globalStats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-extrabold font-heading text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
            {stories.map((s) => (
              <div key={s.name} className="card-elevated">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0 mx-auto md:mx-0">
                    {s.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h2 className="font-heading text-xl font-bold text-foreground">{s.name}</h2>
                        <span className="text-sm text-muted-foreground">{s.program} Program · {s.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-medium">
                        <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{s.before}</span>
                        <ArrowRight className="h-4 w-4 text-success" />
                        <span className="px-2.5 py-1 rounded-full bg-success/10 text-success">{s.after}</span>
                      </div>
                    </div>
                    <blockquote className="text-foreground/80 italic leading-relaxed mb-4">"{s.quote}"</blockquote>
                    <div className="flex flex-wrap gap-2">
                      {s.achievement.split(" · ").map((a) => (
                        <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-success/10 text-success font-medium">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary section-padding">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Start Your Success Story</h2>
            <p className="text-primary-foreground/80 mb-8">Join thousands of students who transformed their careers with Lingua Bridge.</p>
            <Button variant="hero" asChild>
              <Link to="/enroll">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
