export const inverterString = (str: string): string => {
  let reverter = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverter += str[i];
  }

  return reverter;
};
