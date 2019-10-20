"use strict";

function prime(N) {
  let arr = [];
  for (let i = 2; i <= N; i++) {
    arr.push(i);
  }
  const result = [];
  let i = 0;
  while (i < Math.sqrt(N)) {
    i = arr.shift();
    result.push(i);
    arr = arr.filter(el => el % i);
  }
  result.push(...arr);
  return result;
}

console.log("prime(23) = ", prime(23));
