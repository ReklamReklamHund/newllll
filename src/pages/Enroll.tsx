import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const steps = ["Personal Info", "Program", "Schedule", "Payment", "Review"];

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
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Enrollment Submitted!</h1>
            <p className="text-muted-foreground mb-6">Thank you for enrolling at Lingua Bridge Academy. You'll receive a confirmation email shortly with next steps.</p>
            <Button asChild><a href="/">Return Home</a></Button>
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
          <h1 className="font-heading text-2xl font-bold text-foreground mb-8">Online Enrollment</h1>

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
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name <span className="text-destructive">*</span></label>
                    <input type="text" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name <span className="text-destructive">*</span></label>
                    <input type="text" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email <span className="text-destructive">*</span></label>
                  <input type="email" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone <span className="text-destructive">*</span></label>
                  <input type="tel" required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary" />
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Program Selection</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Language <span className="text-destructive">*</span></label>
                  <select required className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary">
                    <option value="">Select a language</option>
                    {["English (ESL)", "Spanish", "French", "German", "Mandarin", "Japanese", "Italian", "Portuguese"].map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Class Format</label>
                  <select className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary">
                    <option>Group Classes ($299/mo)</option>
                    <option>Private Lessons ($65/hr)</option>
                    <option>Online Classes ($249/mo)</option>
                    <option>Intensive Course ($899/4 wks)</option>
                  </select>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Schedule Preferences</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Preferred Times</label>
                  <div className="space-y-2">
                    {["Weekday Mornings", "Weekday Afternoons", "Weekday Evenings", "Weekends"].map((t) => (
                      <label key={t} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-2 border-input text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Start Date</label>
                  <select className="w-full border-2 border-input rounded-lg px-4 py-3 bg-background text-foreground focus:border-primary">
                    <option>January 8, 2024 – Winter Session</option>
                    <option>March 11, 2024 – Spring Session</option>
                    <option>May 6, 2024 – Summer Session</option>
                  </select>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Payment Information</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Payment Plan</label>
                  <div className="space-y-2">
                    {["Pay in Full (5% discount)", "Monthly Installments", "Pay per Session"].map((p) => (
                      <label key={p} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="plan" className="w-5 h-5 border-2 border-input text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{p}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">This is a demo enrollment form. No actual payment will be processed.</p>
              </>
            )}
            {step === 4 && (
              <>
                <h2 className="font-heading text-lg font-semibold text-foreground border-b-2 border-border pb-3 mb-4">Review & Submit</h2>
                <p className="text-muted-foreground text-sm mb-4">Please review your information before submitting.</p>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 rounded border-2 border-input text-primary focus:ring-primary mt-0.5" />
                    <span className="text-sm text-foreground">I agree to the Enrollment Agreement and Terms of Service <span className="text-destructive">*</span></span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 rounded border-2 border-input text-primary focus:ring-primary mt-0.5" />
                    <span className="text-sm text-foreground">I acknowledge the 14-day cancellation policy <span className="text-destructive">*</span></span>
                  </label>
                </div>
              </>
            )}
          </form>

          <div className="flex justify-between mt-8">
            <Button variant="secondary" disabled={step === 0} onClick={() => setStep(step - 1)}>Previous</Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep(step + 1)}>Next</Button>
            ) : (
              <Button variant="accent" onClick={() => setSubmitted(true)}>Submit Enrollment</Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
