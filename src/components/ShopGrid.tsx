export type Product = { name: string; image?: string };

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
      { name: "Bomullskasse" },
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
                className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
              >
                {item.image && (
                  <img src={item.image} alt={item.name} className="h-10 w-10 rounded-md object-cover" />
                )}
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">{column.title}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}