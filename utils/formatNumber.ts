export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("es-CO").format(digit);
};
