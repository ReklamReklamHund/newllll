import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const classes = [
  { name: "Spanish A1 Group", day: "Mon/Wed", time: "6:00–7:30 PM", instructor: "Maria Rodriguez", spots: 8, max: 12, color: "bg-red-400" },
  { name: "Spanish A1 Group", day: "Tue/Thu", time: "10:00–11:30 AM", instructor: "Maria Rodriguez", spots: 5, max: 12, color: "bg-red-400" },
  { name: "Spanish B1 Group", day: "Mon/Wed", time: "7:45–9:15 PM", instructor: "Maria Rodriguez", spots: 10, max: 12, color: "bg-red-400" },
  { name: "French A2 Group", day: "Tue/Thu", time: "6:00–7:30 PM", instructor: "Jean-Pierre Dubois", spots: 7, max: 10, color: "bg-blue-400" },
  { name: "French A2 Online", day: "Wed", time: "8:00–9:15 PM", instructor: "Jean-Pierre Dubois", spots: 12, max: 15, color: "bg-blue-400" },
  { name: "German A1 Group", day: "Saturday", time: "9:00 AM–12:00 PM", instructor: "Hans Mueller", spots: 6, max: 10, color: "bg-yellow-500" },
  { name: "German B2 Group", day: "Thursday", time: "7:00–8:30 PM", instructor: "Hans Mueller", spots: 9, max: 10, color: "bg-yellow-500" },
  { name: "Mandarin A1 Group", day: "Mon/Wed", time: "7:00–8:30 PM", instructor: "Wei Zhang", spots: 8, max: 10, color: "bg-orange-400" },
  { name: "Japanese A1 Group", day: "Tue/Thu", time: "6:30–8:00 PM", instructor: "Yuki Tanaka", spots: 11, max: 12, color: "bg-pink-400" },
  { name: "ESL B1 Group", day: "Mon/Wed/Fri", time: "9:00–10:30 AM", instructor: "Emma Williams", spots: 14, max: 15, color: "bg-emerald-400" },
  { name: "ESL B2 Intensive", day: "Daily", time: "1:00–4:00 PM (4 wks)", instructor: "Emma Williams", spots: 6, max: 8, color: "bg-emerald-400" },
  { name: "ESL C1 Group", day: "Tue/Thu", time: "7:00–8:30 PM", instructor: "Emma Williams", spots: 8, max: 10, color: "bg-emerald-400" },
];

const sessions = [
  { date: "January 8, 2024", name: "Winter Session" },
  { date: "February 5, 2024", name: "Mid-Winter Intensive" },
  { date: "March 11, 2024", name: "Spring Session" },
  { date: "April 15, 2024", name: "Spring Intensive" },
  { date: "May 6, 2024", name: "Summer Session" },
];

function capacityColor(spots: number, max: number) {
  const pct = spots / max;
  if (pct < 0.5) return "bg-success";
  if (pct < 0.8) return "bg-accent";
  return "bg-destructive";
}

export default function Schedule() {
  const [filter, setFilter] = useState("");
  const filtered = filter ? classes.filter((c) => c.name.toLowerCase().includes(filter.toLowerCase())) : classes;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Class Schedule</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Find and reserve your spot in our upcoming classes.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-64 shrink-0 space-y-6">
                <div>
                  <label htmlFor="filter" className="block text-sm font-medium text-foreground mb-1.5">Filter by Language</label>
                  <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full border-2 border-input rounded-lg px-4 py-3 text-foreground bg-background focus:border-primary">
                    <option value="">All Languages</option>
                    {["Spanish", "French", "German", "Mandarin", "Japanese", "ESL"].map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Upcoming Sessions</h3>
                  <ul className="space-y-2 text-sm">
                    {sessions.map((s) => (
                      <li key={s.date} className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-foreground">{s.name}</div>
                        <div className="text-muted-foreground text-xs">{s.date}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Classes List */}
              <div className="flex-1 space-y-4">
                {filtered.map((c, i) => (
                  <div key={i} className="card-interactive flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${c.color} shrink-0 hidden sm:block`} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-foreground">{c.name}</h3>
                      <p className="text-sm text-muted-foreground">{c.day} · {c.time} · {c.instructor}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{c.spots}/{c.max}</div>
                        <div className="w-20 bg-muted rounded-full h-1.5 mt-1">
                          <div className={`h-1.5 rounded-full ${capacityColor(c.spots, c.max)}`} style={{ width: `${(c.spots / c.max) * 100}%` }} />
                        </div>
                      </div>
                      <Button size="sm" variant={c.spots >= c.max ? "secondary" : "default"} disabled={c.spots >= c.max}>
                        {c.spots >= c.max ? "Full" : "Reserve"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
