export function gcf(a, b) {
  let num = 2;
  while (num < a && num < b) {
    if (a % num === 0 && b % num === 0) {
      a /= num;
      b /= num;
    } else {
      num++;
    }
  }
  return [a, b];
}
