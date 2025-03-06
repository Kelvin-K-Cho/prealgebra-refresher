export function isFactor(num, factor) {
  return num % factor === 0;
}

export function findFactorPairs(num) {
  if (num < 2) return "Try a number higher than 1";

  const results = [];

  for (let i = 1; i < num / i + 1; i++) {
    if (num % i === 0) {
      results.push([i, num / i]);
    }
  }

  return results;
}

export function findFactors(num) {
  if (num < 2) return "Try a number higher than 1";
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}
