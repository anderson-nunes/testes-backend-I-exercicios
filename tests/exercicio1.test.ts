import { exercicio1 } from "../src/exercicio1";

describe("Exercicio 1", () => {
  test("Função que recebe um número em string e retorna em number", () => {
    const result = exercicio1("1");
    expect(result).toEqual(1);
  });
});
