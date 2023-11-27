export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(amount);
};
