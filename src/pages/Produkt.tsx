import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { findProduct } from "@/components/ShopGrid";
import type { ProductOption } from "@/components/ShopGrid";

const priceFormat = new Intl.NumberFormat("sv-SE", {
  style: "currency",
  currency: "SEK",
  maximumFractionDigits: 0,
});

const formatPrice = (value: number) => priceFormat.format(value);

export default function Produkt() {
  const { slug } = useParams();
  const found = findProduct(slug);
  const options = found?.item.options ?? [];
  const [selected, setSelected] = useState<Record<string, number>>({});

  const choose = (optionId: string, index: number) =>
    setSelected((prev) => ({ ...prev, [optionId]: index }));

  const allChosen = options.length > 0 && options.every((o) => selected[o.id] !== undefined);

  const unitPrice = allChosen
    ? options.reduce((sum, o) => sum + o.choices[selected[o.id]].price, 0)
    : 0;

  const quantity = (() => {
    const antal = options.find((o) => o.id === "antal");
    if (!antal || selected[antal.id] === undefined) return 1;
    return Number(antal.choices[selected[antal.id]].label) || 1;
  })();

  const total = unitPrice * quantity;

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

              {options.length > 0 && (
                <div className="mt-8 space-y-6">
                  {options.map((option: ProductOption) => (
                    <div key={option.id}>
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {option.label}
                      </h2>
                      {option.kind === "swatch" ? (
                        <div className="mt-3 flex flex-wrap gap-3">
                          {option.choices.map((choice, index) => {
                            const isActive = selected[option.id] === index;
                            return (
                              <button
                                key={choice.label}
                                type="button"
                                onClick={() => choose(option.id, index)}
                                aria-pressed={isActive}
                                aria-label={`${option.label}: ${choice.label}`}
                                title={choice.label}
                                className={`h-9 w-9 rounded-full border-2 transition-colors duration-200 ${
                                  isActive
                                    ? "border-primary ring-2 ring-primary/30"
                                    : "border-border hover:border-primary"
                                }`}
                                style={{ backgroundColor: choice.color }}
                              />
                            );
                          })}
                        </div>
                      ) : (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {option.choices.map((choice, index) => {
                            const isActive = selected[option.id] === index;
                            return (
                              <button
                                key={choice.label}
                                type="button"
                                onClick={() => choose(option.id, index)}
                                aria-pressed={isActive}
                                className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                  isActive
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-border bg-background text-foreground hover:border-primary hover:bg-primary/5"
                                }`}
                              >
                                {choice.label}
                                {choice.price > 0 && (
                                  <span className="ml-2 text-xs text-muted-foreground">
                                    +{formatPrice(choice.price)}/st
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                      {option.kind === "swatch" && selected[option.id] !== undefined && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {option.choices[selected[option.id]].label}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="rounded-lg border border-border bg-card p-5">
                    {allChosen ? (
                      <>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(unitPrice)} per kasse × {quantity} st
                        </p>
                        <p className="mt-1 font-heading text-3xl font-extrabold text-foreground">
                          {formatPrice(total)}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Pris exkl. moms och frakt.
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Välj alla alternativ för att se priset.
                      </p>
                    )}
                  </div>
                </div>
              )}

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
