import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { findProduct } from "@/components/ShopGrid";

export default function Produkt() {
  const { slug } = useParams();
  const found = findProduct(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 flex-1">
        <Link
          to="/butik"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" /> Tillbaka till butiken
        </Link>

        {!found ? (
          <div className="mt-8 rounded-lg border border-border bg-card p-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground">Produkten hittades inte</h1>
            <p className="mt-3 text-muted-foreground">
              Den här produkten finns inte längre. Kika i butiken så hittar du något annat.
            </p>
            <Button variant="hero" className="mt-6" asChild>
              <Link to="/butik">Till butiken</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              {found.item.image ? (
                <img
                  src={found.item.image}
                  alt={found.item.name}
                  className="aspect-[4/3] w-full rounded-md object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-dashed border-border bg-background text-sm text-muted-foreground">
                  Ingen bild ännu
                </div>
              )}
            </div>

            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {found.column.title}
              </span>
              <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground">
                {found.item.name}
              </h1>
              <p className="mt-4 text-muted-foreground">
                {found.item.description ??
                  "Kontakta oss för pris, antal och leveranstid på den här produkten."}
              </p>
              <Button variant="hero" className="mt-6" asChild>
                <Link to="/contact">
                  Kontakta oss <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
