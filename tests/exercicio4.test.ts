import { numeroPorExtenso } from "../src/exercicio4";

describe("Exercício 4", () => {
  test("Converter de número para extenso", () => {
    expect(numeroPorExtenso(1)).toBe("um");
    expect(numeroPorExtenso(5)).toBe("cinco");
    expect(numeroPorExtenso(10)).toBe("dez");
  });
});
