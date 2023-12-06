export const exercicio2 = (data: string): string => {
  const res = data.split("/");

  const formatDate = `${res[2]}/${res[1]}/${res[0]}`;

  return formatDate;
};
