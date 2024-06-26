export function formatCurrency(cash) {
  const formatedCash = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(cash);

  return formatedCash;
}

export function formatDate(date) {
  const convertToDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(convertToDate);

  return formattedDate;
}
