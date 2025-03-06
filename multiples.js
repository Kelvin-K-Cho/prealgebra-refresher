export function findMultiples(num, times) {
  if (times < 1) return "Enter a times higher than 1";

  const multiples = [];

  for (let i = 1; i <= times; i++) {
    multiples.push(num * i);
  }

  return multiples;
}
