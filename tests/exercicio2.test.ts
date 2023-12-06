import { exercicio2 } from "../src/exercicio2";

describe("Exercicio 2", () => {
  test("Coverter data para o formato 'dd/mm/aaa'", () => {
    const dateFormate1 = "2022/09/26";
    const dateFormate2 = "26/09/2022";

    const result = exercicio2(dateFormate1);
    expect(result).toEqual(dateFormate2);
  });
});
