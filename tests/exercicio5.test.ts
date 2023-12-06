import { inverterString } from "../src/exercicio5";

describe("Exercicio 5", () => {
  test("Função para inverter o texto", () => {
    expect(inverterString("Hello world!")).toBe("!dlrow olleH");
    expect(inverterString("Anderson")).toBe("nosrednA");
  });
});
