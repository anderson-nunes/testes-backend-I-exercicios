export const numerosEntre = (num1: number, num2: number) => {
  if (num1 > num2) {
    return [];
  }

  const numeros = [];

  for (let i = num1; i <= num2; i++) {
    numeros.push(i);
  }

  return numeros;
};
