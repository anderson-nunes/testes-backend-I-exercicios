import { exercicio3 } from "../src/exercicio3";

describe("Exercicio 3", () => {
  test("Verificar se o usuário Astrodev está na lista", () => {
    const listaDeUsuarios = exercicio3();

    const usuarioAstrodev = listaDeUsuarios.find(
      (usuario) => usuario.name === "Astrodev"
    );

    expect(usuarioAstrodev).toBeDefined();
  });
});
