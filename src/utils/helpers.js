export function currencyToNumber (string = '') {
  return Number(string.replace(/\D/g, '')) / 100;
}
