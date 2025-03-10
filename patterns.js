export function patterns(start, diff, times) {
  const results = [start];

  for (let i = 1; i < times; i++) {
    let last = results[results.length - 1];
    results.push(last + diff);
  }

  return results;
}
