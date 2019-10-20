
function bulb_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const tmp = arr[i];
        arr[i]  = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

console.log('bulb_sort([2,5,1]) =', bulb_sort([2, 5, 1]))