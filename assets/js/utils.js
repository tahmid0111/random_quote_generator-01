export function getQuoteId() {
  // Get the current day of the year (1 to 365)
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1; // Ensure we start from day 1
  return dayOfYear;
}

