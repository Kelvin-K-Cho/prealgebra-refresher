export function primeFactorization(num) {
  const results = [];

  let quotient = num;

  let divisor = 2;

  while (divisor <= quotient) {
    if (quotient % divisor === 0) {
      results.push(divisor);
      quotient /= divisor;
    } else {
      divisor++;
    }
  }

  if (results.length === 1) {
    results.unshift(1);
  }

  return results;
}
