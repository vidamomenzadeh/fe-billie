/**
 * Convert to German Format
 * */
export const toGermanFormat = (number) =>
  (Math.round(parseFloat(number.toFixed(2)) * 100) / 100)
    .toFixed(2)
    .toLocaleString('de-DE')
