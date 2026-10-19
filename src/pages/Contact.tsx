import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Contact() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Kontakta oss</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Vi hör gärna från dig. Skicka ett meddelande så återkommer vi så snart vi kan.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
