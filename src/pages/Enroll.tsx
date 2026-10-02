import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const steps = ["Personuppgifter", "Program", "Schema", "Betalning", "Granska"];

export default function Enroll() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 section-padding">
          <div className="max-w-2xl mx-auto bg-card shadow-2xl rounded-2xl p-8 md:p-12 text-center">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Anmälan skickad!</h1>
            <p className="text-muted-foreground mb-6">Tack för din anmälan. Du får strax ett bekräftelsemejl med nästa steg.</p>
            <Button asChild><a href="/">Till startsidan</a></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 section-padding">
        <div className="max-w-3xl mx-auto bg-card shadow-2xl rounded-2xl p-8 md:p-12">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-8">Anmälan online</h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${
                  i < step ? "bg-success text-success-foreground" : i === step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>{i < step ? "✓" : i + 1}</div>
                <span className="text-xs text-muted-foreground hidden sm:block">{s}</span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {step === 0 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Personuppgifter</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Förnamn <span className="text-destructive">*</span></label>
                    <input type="text" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Efternamn <span className="text-destructive">*</span></label>
                    <input type="text" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-post <span className="text-destructive">*</span></label>
                  <input type="email" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefon <span className="text-destructive">*</span></label>
                  <input type="tel" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Val av program</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Språk <span className="text-destructive">*</span></label>
                  <select required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary">
                    <option value="">Välj ett språk</option>
                    {["Engelska", "Spanska", "Franska", "Tyska", "Mandarin", "Japanska", "Italienska", "Portugisiska"].map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Kursformat</label>
                  <select className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary">
                    <option>Gruppkurser (2 990 kr/mån)</option>
                    <option>Privatlektioner (650 kr/tim)</option>
                    <option>Onlinekurser (2 490 kr/mån)</option>
                    <option>Intensivkurs (8 990 kr/4 v)</option>
                  </select>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Schemaönskemål</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Önskade tider</label>
                  <div className="space-y-2">
                    {["Vardagsförmiddagar", "Vardagseftermiddagar", "Vardagskvällar", "Helger"].map((t) => (
                      <label key={t} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-2 border-input text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Önskat startdatum</label>
                  <select className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary">
                    <option>8 januari 2026 – Vintertermin</option>
                    <option>11 mars 2026 – Vårtermin</option>
                    <option>6 maj 2026 – Sommartermin</option>
                  </select>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Betalningsuppgifter</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Betalningsplan</label>
                  <div className="space-y-2">
                    {["Betala allt på en gång (5 % rabatt)", "Månadsvis delbetalning", "Betala per tillfälle"].map((p) => (
                      <label key={p} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="plan" className="w-5 h-5 border-2 border-input text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{p}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">Detta är ett demoformulär. Ingen faktisk betalning genomförs.</p>
              </>
            )}
            {step === 4 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Granska och skicka</h2>
                <p className="text-muted-foreground text-sm mb-4">Granska dina uppgifter innan du skickar in.</p>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 rounded border-2 border-input text-primary focus:ring-primary mt-0.5" />
                    <span className="text-sm text-foreground">Jag godkänner anmälningsavtalet och användarvillkoren <span className="text-destructive">*</span></span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 rounded border-2 border-input text-primary focus:ring-primary mt-0.5" />
                    <span className="text-sm text-foreground">Jag har tagit del av avbokningsreglerna (14 dagar) <span className="text-destructive">*</span></span>
                  </label>
                </div>
              </>
            )}
          </form>

          <div className="flex justify-between mt-8">
            <Button variant="secondary" disabled={step === 0} onClick={() => setStep(step - 1)}>Föregående</Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep(step + 1)}>Nästa</Button>
            ) : (
              <Button variant="accent" onClick={() => setSubmitted(true)}>Skicka anmälan</Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
