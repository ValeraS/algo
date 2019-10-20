"use strict"
function choose_sort(arr) {
  const sorted = [];
  while (arr.length) {
    let min = arr[0];
    let mini = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        mini = j;
      }
    }
    sorted.push(arr.splice(mini, 1)[0]);
  }
  return sorted;
}

console.log('choose_sort([2,5,1]) =', choose_sort([2, 5, 1]))