"use strict";

function primes(N) {
  let arr = [];
  for (let i = 2; i <= N; i++) {
    arr.push(i);
  }
  const limit = Math.floor(Math.sqrt(N));
  for (let i = 0; arr[i] < limit; i++) {
    if (arr[i] === 0) continue;
    const prime = arr[i];
    for (let j = i * 2; j < arr.length; j += prime) {
      arr[j] = 0;
    }
  }
  return arr.filter(Boolean);
}

console.log("primes(23) = ", primes(23));
