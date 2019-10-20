"use strict";

function max_sum(arr) {
  let ans = arr[0],
    ansL = 0,
    ansR = 0;
  let sum = 0;
  let minSum = 0;
  let minPos = -1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let curSum = sum - minSum;
    if (curSum > ans) {
      ans = curSum;
      ansL = minPos + 1;
      ansR = i;
    }
    if (sum < minSum) {
      minSum = sum;
      minPos = i;
    }
  }
  return arr.slice(ansL, ansR + 1);
}

console.log(
  "max_sum([5, -6, 6, -5, 8, 11, -13, 9])",
  max_sum([5, -6, 6, -5, 8, 11, -13, 9])
);
