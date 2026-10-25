import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowDown, ArrowRight, Image as ImageIcon, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { findProduct } from "@/components/ShopGrid";
import ProductCustomizer from "@/components/ProductCustomizer";

export default function Produkt() {
  const { slug } = useParams();
  const found = findProduct(slug);
  const customization = useRef<HTMLDivElement>(null);
  const customize = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    customization.current?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-10 flex-1">
        <Link to="/butik" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" /> Tillbaka till butiken
        </Link>
        {!found ? (
          <div className="py-16 text-center">
            <h1 className="font-heading text-3xl font-bold">Produkten hittades inte</h1>
            <p className="mt-3 text-muted-foreground">Den här produkten finns inte längre.</p>
            <Button variant="outline" className="mt-6" asChild><Link to="/butik">Till butiken</Link></Button>
          </div>
        ) : (
          <>
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              {found.item.image ? (
                <img src={found.item.image} alt={found.item.name} className="aspect-[4/3] w-full object-contain" />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-md bg-muted text-muted-foreground">
                  <ImageIcon className="h-10 w-10" strokeWidth={1.25} aria-hidden="true" />
                  <span className="text-sm">Ingen bild ännu</span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-primary">{found.column.title}</p>
                <h1 className="mt-3 font-heading text-4xl font-extrabold">{found.item.name}</h1>
                <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{found.item.description ?? "Kontakta oss för information, pris och leveranstid på den här produkten."}</p>
                {found.item.options?.length ? (
                  <>
                    <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
                      <div><dt className="text-muted-foreground">Format</dt><dd className="mt-1 font-medium">{found.item.name === "Läppbalsam" ? "7 cm, diameter 1,9 cm" : <>40 x 10 x 35<br />38 x 10 x 42</>}</dd></div>
                      <div><dt className="text-muted-foreground">Grundfärger</dt><dd className="mt-1 font-medium">{found.item.name === "Läppbalsam" ? "17 alternativ" : "11 alternativ"}</dd></div>
                    </dl>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Button size="lg" onClick={customize}>Anpassa <ArrowDown aria-hidden="true" /></Button>
                      <details className="group">
                        <summary className="inline-flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 [&::-webkit-details-marker]:hidden">
                          <Info className="h-4 w-4 text-primary" aria-hidden="true" /> Information
                        </summary>
                        <div className="mt-4 w-full max-w-2xl rounded-lg border border-border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground shadow-sm sm:p-6">
                          <h2 className="font-heading text-xl font-semibold text-foreground">Information om läppbalsam</h2>
                          <p className="mt-3">Ett praktiskt läppbalsam för kampanjer, events, giveaways och kundgåvor. Välj grundfärg, tryckmetod och antal tryckfärger för att skapa en produkt som passar ert varumärke.</p>
                          <div className="mt-5 grid gap-5 sm:grid-cols-2">
                            <div>
                              <h3 className="font-semibold text-foreground">Produktdetaljer</h3>
                              <ul className="mt-2 list-disc space-y-1 pl-5">
                                <li>Format: 7 cm, diameter 1,9 cm</li>
                                <li>17 grundfärger att välja mellan</li>
                                <li>Passar för egen logotyp och budskap</li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">Tryckalternativ</h3>
                              <ul className="mt-2 list-disc space-y-1 pl-5">
                                <li>Tampongtryck med 1–3 färger</li>
                                <li>Digitaltryck i 4-färgad CMYK</li>
                                <li>Slutligt pris bekräftas i offert</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-5 border-t border-border pt-4">
                            <h3 className="font-semibold text-foreground">Bra att veta</h3>
                            <p className="mt-2">Använd anpassningen för att se alla val i rätt ordning. När du har valt dina alternativ och antal kan du kontakta oss för offert, leveranstid och hjälp med original.</p>
                          </div>
                        </div>
                      </details>
                    </div>
                  </>
                ) : <Button variant="outline" className="mt-7" asChild><Link to="/contact">Kontakta oss <ArrowRight aria-hidden="true" /></Link></Button>}
              </div>
            </div>
            {found.item.options?.length ? (
              <div ref={customization} className="scroll-mt-24">
                <ProductCustomizer key={slug} options={found.item.options} productName={found.item.name} />
              </div>
            ) : null}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
