"use strict";

function perm(arr) {
  if (arr.length === 1) {
    return [arr];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const permutations = perm(arr.filter((_, j) => i !== j));
    result.push(...permutations.map(el => [arr[i], ...el]));
  }
  return result;
}

function permutation(N) {
  if (N > 9) {
    throw "Not supported";
  }
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  return perm(arr).map(el => el.reduce((s, n) => s * 10 + n, 0));
}

console.log("permutation(3) = ", permutation(3));
