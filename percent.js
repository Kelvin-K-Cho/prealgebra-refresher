export function simplifiedFraction(dividend, divisor) {
  let commonDenominator = 2;
  while (commonDenominator < dividend && commonDenominator < divisor) {
    if (
      dividend % commonDenominator === 0 &&
      divisor % commonDenominator === 0
    ) {
      dividend /= commonDenominator;
      divisor /= commonDenominator;
    } else {
      commonDenominator++;
    }
  }
  return [dividend, divisor];
}
