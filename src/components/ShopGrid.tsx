import { Link } from "react-router-dom";
import kasseImage from "@/assets/kasse.jpg.asset.json";

export type ProductChoice = { label: string; price: number; color?: string };

export type ProductOption = {
  id: string;
  label: string;
  kind: "swatch" | "button";
  choices: ProductChoice[];
};

export type Product = {
  name: string;
  image?: string;
  description?: string;
  options?: ProductOption[];
};


const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/é/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const productSlug = (columnTitle: string, name: string) =>
  `${slugify(columnTitle)}-${slugify(name)}`;

export function findProduct(slug?: string) {
  if (!slug) return null;
  for (const column of shopColumns) {
    for (const item of column.items) {
      if (productSlug(column.title, item.name) === slug) return { column, item };
    }
  }
  return null;
}

export const shopColumns: { title: string; items: Product[] }[] = [
  {
    title: "Premium",
    items: [
      { name: "Produkt 1" },
      { name: "Produkt 2" },
      { name: "Produkt 3" },
      { name: "Produkt 4" },
      { name: "Produkt 5" },
    ],
  },
  {
    title: "Medium",
    items: [
      {
        name: "Bomullskasse",
        image: kasseImage.url,
        options: [
          {
            id: "format",
            label: "Format",
            kind: "button",
            choices: [
              { label: "40 x 10 x 35", price: 39 },
              { label: "38 x 10 x 42", price: 49 },
            ],
          },
          {
            id: "farg",
            label: "Färg",
            kind: "swatch",
            choices: [
              { label: "Natur", price: 0, color: "#E8E0D5" },
              { label: "Svart", price: 0, color: "#1C1C1C" },
              { label: "Mörkblå", price: 0, color: "#1F3A5F" },
              { label: "Röd", price: 0, color: "#B3282D" },
              { label: "Grå", price: 0, color: "#8A8F98" },
            ],
          },
          {
            id: "tryck",
            label: "Tryck",
            kind: "button",
            choices: [
              { label: "Inget tryck", price: 0 },
              { label: "1-färgstryck", price: 9 },
              { label: "2-färgstryck", price: 15 },
              { label: "Broderi", price: 25 },
            ],
          },
          {
            id: "antal",
            label: "Antal",
            kind: "button",
            choices: [
              { label: "50", price: 0 },
              { label: "100", price: 0 },
              { label: "250", price: 0 },
              { label: "500", price: 0 },
            ],
          },
        ],
      },

      { name: "Produkt 2" },
      { name: "Produkt 3" },
      { name: "Produkt 4" },
      { name: "Produkt 5" },
    ],
  },
  {
    title: "Basic",
    items: [
      { name: "Produkt 1" },
      { name: "Produkt 2" },
      { name: "Produkt 3" },
      { name: "Produkt 4" },
      { name: "Produkt 5" },
    ],
  },
];

export default function ShopGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {shopColumns.map((column) => (
        <section key={column.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">{column.title}</h2>
          <ul className="space-y-3">
            {column.items.map((item, index) => (
              <li
                key={`${column.title}-${item.name}-${index}`}
                className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-colors duration-200 hover:border-primary hover:bg-primary/5"
              >
                <Link
                  to={`/butik/${productSlug(column.title, item.name)}`}
                  className="flex min-w-0 flex-1 flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{column.title}</span>
                  </div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-[4/3] w-full rounded-md object-cover"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
