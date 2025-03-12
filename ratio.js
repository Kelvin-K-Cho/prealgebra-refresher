export function findRatio(dividend, divisor, numerator, denominator) {
  if (numerator) {
    return (divisor * numerator) / dividend;
  } else if (denominator) {
    return (dividend * denominator) / divisor;
  } else {
    return dividend / divisor;
  }
}
