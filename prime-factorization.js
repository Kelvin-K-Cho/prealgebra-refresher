import { isPrime, listPrimes } from "./prime";

export function primeFactorization(num) {
  const results = [];

  const primeList = listPrimes(num);

  let quotient = num;

  while (!isPrime(quotient)) {
    for (const el of primeList) {
      if (quotient % el === 0) {
        results.push(el);
        quotient /= el;
      }
    }
  }

  results.push(quotient);

  return results;
}
