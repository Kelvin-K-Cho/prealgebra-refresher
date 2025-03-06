export function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

export function listPrimes(num) {
  const list = [];

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      list.push(i);
    }
  }

  return list;
}

export function listComposites(num) {
  const list = [];

  for (let i = 2; i < num; i++) {
    if (!isPrime(i)) {
      list.push(i);
    }
  }

  return list;
}
