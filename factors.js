function findFactorPairs(num) {
  if (num < 2) return "Try a number higher than 1";

  const results = [];

  for (let i = 1; i < num / i; i++) {
    if (num % i === 0) {
      results.push([i, num / i]);
    }
  }

  return results;
}
