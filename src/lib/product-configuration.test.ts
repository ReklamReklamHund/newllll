import { describe, expect, it } from "vitest";
import { findProduct } from "@/components/ShopGrid";
import { availableChoices, configurationPrice, selectProductChoice } from "./product-configuration";

const options = findProduct("medium-bomullskasse")?.item.options ?? [];
const lipBalmOptions = findProduct("basic-lappbalsam")?.item.options ?? [];

describe("Bomullskassens anpassning", () => {
  it("har rätt format och elva grundfärger", () => {
    expect(options[0].choices.map((choice) => choice.label)).toEqual(["40 x 10 x 35", "38 x 10 x 42"]);
    expect(options[1].choices).toHaveLength(11);
  });
  it("har sjutton grundfärger för läppbalsam", () => {
    expect(lipBalmOptions[0].choices).toHaveLength(17);
    expect(lipBalmOptions[0].choices.map((choice) => choice.label)).toContain("Rosé-champagne metallic");
  });
  it("visar bara fyra färger för digitalt tryck och väljer det automatiskt", () => {
    const selected = selectProductChoice(options, {}, "tryck", 0);
    expect(selected.fargning).toBe(0);
    expect(availableChoices(options[4], options, selected).map(({ choice }) => choice.label)).toEqual(["4 färger"]);
  });
  it("nollställer färgning vid byte av tryck och visar screenalternativen", () => {
    const selected = selectProductChoice(options, { tryck: 0, fargning: 0 }, "tryck", 1);
    expect(selected.fargning).toBeUndefined();
    expect(availableChoices(options[4], options, selected).map(({ choice }) => choice.label)).toEqual(["1 färg", "2 färger", "3 färger", "5 färger"]);
  });
  it("döljer screentryck för svart men visar det för andra färger", () => {
    const black = selectProductChoice(options, { tryck: 1 }, "farg", 2);
    expect(availableChoices(options[3], options, black).map(({ choice }) => choice.label)).toEqual(["Digital transfertryck"]);

    const red = selectProductChoice(options, { tryck: 1 }, "farg", 4);
    expect(availableChoices(options[3], options, red).map(({ choice }) => choice.label)).toEqual(["Digital transfertryck", "Screentryck"]);
  });
  it("döljer pris vid ofullständiga eller ogiltiga val och antal", () => {
    expect(configurationPrice(options, {}, 100)).toBeNull();
    const selected = { format: 0, farg: 0, motiv: 0, tryck: 0, fargning: 0 };
    for (const quantity of [0, -1, 1.5]) expect(configurationPrice(options, selected, quantity)).toBeNull();
    expect(configurationPrice(options, { ...selected, tryck: 1 }, 100)).toBeNull();
    expect(configurationPrice(options, selected, 100)).toEqual({ unit: 64, total: 6400 });
    expect(configurationPrice(options, { ...selected, motiv: 1 }, 100)).toEqual({ unit: 89, total: 8900 });
  });
});
