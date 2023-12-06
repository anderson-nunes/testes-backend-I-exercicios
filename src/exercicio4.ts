export const numeroPorExtenso = (numero: number): string => {
  const numerosPorExtenso = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
  ];

  if (numero >= 1 && numero <= 10) {
    return numerosPorExtenso[numero - 1];
  } else {
    return "Parâmetro inválido";
  }
};
