import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowDown, ArrowRight, Image as ImageIcon } from "lucide-react";
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
                <img src={found.item.image} alt={found.item.name} className="aspect-[4/3] w-full rounded-md bg-muted object-contain" />
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
                      <div><dt className="text-muted-foreground">Format</dt><dd className="mt-1 font-medium">40 x 10 x 35<br />38 x 10 x 42</dd></div>
                      <div><dt className="text-muted-foreground">Grundfärger</dt><dd className="mt-1 font-medium">11 alternativ</dd></div>
                    </dl>
                    <Button size="lg" onClick={customize} className="mt-7">Anpassa <ArrowDown aria-hidden="true" /></Button>
                  </>
                ) : <Button variant="outline" className="mt-7" asChild><Link to="/contact">Kontakta oss <ArrowRight aria-hidden="true" /></Link></Button>}
              </div>
            </div>
            {found.item.options?.length ? (
              <div ref={customization} className="scroll-mt-24">
                <ProductCustomizer key={slug} options={found.item.options} />
              </div>
            ) : null}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
