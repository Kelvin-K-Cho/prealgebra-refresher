function findFactorPairs(num) {
  if (num < 2) return "Try a number higher than 1";

  const results = [];

  for (let i = 1; i < num / i + 1; i++) {
    if (num % i === 0) {
      results.push([i, num / i]);
    }
  }

  return results;
}

function findFactors(num) {
  if (num < 2) return "Try a number higher than 1";
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

function findMultiples(num, times) {
  if (times < 1) return "Enter a times higher than 1";

  const multiples = [];

  for (let i = 1; i <= times; i++) {
    multiples.push(num * i);
  }

  return multiples;
}
