export function formatMoney(priceRupees) {
  return `Rs. ${Math.floor(priceRupees).toLocaleString("en-IN")}`;
}
