import { numerosEntre } from "../src/exercicio6";

describe("Exercicio 6", () => {
  test("Função deve retornar uma lista com números entre o primeiro e o segundo número fornecido", () => {
    expect(numerosEntre(2, 10)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numerosEntre(1, 3)).toEqual([1, 2, 3]);
  });
});
