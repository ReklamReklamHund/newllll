import type { ProductOption } from "@/components/ShopGrid";

export type ProductSelections = Record<string, number>;

export function availableChoices(option: ProductOption, options: ProductOption[], selected: ProductSelections) {
  const print = options.find((item) => item.id === "tryck");
  const method = print?.choices[selected.tryck]?.label;
  return option.choices
    .map((choice, index) => ({ choice, index }))
    .filter(({ choice }) => !choice.printMethod || choice.printMethod === method);
}

export function selectProductChoice(options: ProductOption[], selected: ProductSelections, id: string, index: number): ProductSelections {
  const next = { ...selected, [id]: index };
  if (id === "tryck" && selected.tryck !== index) {
    delete next.fargning;
    const coloring = options.find((option) => option.id === "fargning");
    if (coloring) {
      const choices = availableChoices(coloring, options, next);
      if (choices.length === 1) next.fargning = choices[0].index;
    }
  }
  return next;
}

export function configurationPrice(options: ProductOption[], selected: ProductSelections, quantity: number) {
  const complete = options.length > 0 && options.every((option) =>
    availableChoices(option, options, selected).some(({ index }) => index === selected[option.id]),
  ) && Number.isInteger(quantity) && quantity > 0;
  if (!complete) return null;
  const base = options.find((option) => option.id === "format")?.choices[selected.format]?.price ?? 0;
  const print = options.find((option) => option.id === "tryck")?.choices[selected.tryck]?.price ?? 0;
  const coloring = options.find((option) => option.id === "fargning")?.choices[selected.fargning]?.price ?? 0;
  const sides = selected.motiv === 0 ? 1 : 2;
  const unit = base + (print + coloring) * sides;
  return { unit, total: unit * quantity };
}