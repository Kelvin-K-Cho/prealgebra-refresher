export function findRatio(dividend, divisor, x, y) {
  if (x) {
    return (divisor * x) / dividend;
  } else if (y) {
    return (dividend * y) / divisor;
  }

  return dividend / divisor;
}
