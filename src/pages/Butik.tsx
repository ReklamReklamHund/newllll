const columns = [
  {
    title: "Premium",
    items: ["Produkt 1", "Produkt 2", "Produkt 3", "Produkt 4", "Produkt 5"],
  },
  {
    title: "Medium",
    items: ["Produkt 1", "Produkt 2", "Produkt 3", "Produkt 4", "Produkt 5"],
  },
  {
    title: "Basic",
    items: ["Produkt 1", "Produkt 2", "Produkt 3", "Produkt 4", "Produkt 5"],
  },
];

export default function Butik() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="font-heading font-extrabold text-4xl text-foreground mb-8">Butik</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <section key={column.title} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">{column.title}</h2>
            <ul className="space-y-3">
              {column.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-background border border-border rounded-xl px-4 py-3"
                >
                  <span className="text-sm font-medium text-foreground">{item}</span>
                  <span className="text-xs text-foreground/50">{column.title}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
