import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const sampleQuestions = [
  { q: 'She ___ to the store yesterday.', options: ["go", "goes", "went", "going"], correct: 2 },
  { q: 'I have ___ finished my homework.', options: ["yet", "already", "still", "always"], correct: 1 },
  { q: 'If I ___ more time, I would travel.', options: ["have", "had", "will have", "having"], correct: 1 },
  { q: 'Synonym for "happy":', options: ["sad", "joyful", "angry", "tired"], correct: 1 },
  { q: '"Eloquent" means:', options: ["fluent and persuasive", "quiet", "confused", "basic"], correct: 0 },
];

const levels = [
  { min: 0, label: "Beginner (A1)" },
  { min: 2, label: "Elementary (A2)" },
  { min: 3, label: "Intermediate (B1)" },
  { min: 4, label: "Upper-Intermediate (B2)" },
  { min: 5, label: "Advanced (C1)" },
];

function getLevel(score: number) {
  return [...levels].reverse().find((l) => score >= l.min)?.label || "Beginner (A1)";
}

export default function PlacementTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(sampleQuestions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  };

  const score = answers.reduce((acc, a, i) => acc + (a === sampleQuestions[i].correct ? 1 : 0), 0);

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 section-padding">
          <div className="max-w-2xl mx-auto bg-card shadow-2xl rounded-2xl p-8 md:p-12 text-center">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Your Results</h1>
            <p className="text-muted-foreground mb-6">You scored {score} out of {sampleQuestions.length}</p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-bold text-xl mb-6">
              {getLevel(score)}
            </div>
            <p className="text-muted-foreground text-sm mb-8">This is a sample assessment. A full placement test includes grammar, vocabulary, reading, and listening sections.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" asChild><a href="/enroll">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button variant="outline" onClick={() => { setFinished(false); setCurrent(0); setAnswers(Array(sampleQuestions.length).fill(null)); }}>Retake Test</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const q = sampleQuestions[current];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 section-padding">
        <div className="max-w-2xl mx-auto bg-card shadow-2xl rounded-2xl p-8 md:p-12">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Level Placement Test</h1>
          {/* Progress */}
          <div className="w-full bg-muted rounded-full h-2.5 mb-8">
            <div className="bg-primary h-2.5 rounded-full transition-all duration-300" style={{ width: `${((current + 1) / sampleQuestions.length) * 100}%` }} />
          </div>
          <div className="text-sm text-muted-foreground mb-2">Question {current + 1} of {sampleQuestions.length}</div>
          <h2 className="text-lg font-semibold text-foreground mb-6">{q.q}</h2>
          <div className="space-y-3 mb-8">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left px-5 py-3.5 rounded-lg border-2 transition-all text-sm font-medium ${
                  answers[current] === i
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:border-primary/30 text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <Button variant="secondary" disabled={current === 0} onClick={() => setCurrent(current - 1)}>Previous</Button>
            {current < sampleQuestions.length - 1 ? (
              <Button disabled={answers[current] === null} onClick={() => setCurrent(current + 1)}>Next</Button>
            ) : (
              <Button variant="accent" disabled={answers[current] === null} onClick={() => setFinished(true)}>Submit</Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
