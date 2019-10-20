"use strict";

function binary_search(arr, elem) {
  let left = 0;
  let right = arr.length;
  while (left !== right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === elem) {
      return middle;
    }
    if (arr[middle] < elem) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return -1;
}

console.log('binary_search([1, 2, 3, 4, 5], 1) = ', binary_search([1, 2, 3, 4, 5], 1));
console.log('binary_search([1, 2, 3, 4, 5], 3) = ', binary_search([1, 2, 3, 4, 5], 3));
console.log('binary_search([1, 2, 3, 4, 5], 6) = ', binary_search([1, 2, 3, 4, 5], 6));
