function isPrime(num) {
  if (num < 2) return true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function listPrimes(num) {
  const list = [];

  for (let i = 1; i < num; i++) {
    if (isPrime(i)) {
      list.push(i);
    }
  }

  return list;
}
