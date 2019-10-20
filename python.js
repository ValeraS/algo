"use strict";

function python(N) {
  const arr = new Array(N);
  for (let i = 0; i < N; i++) {
    arr[i] = new Array(N);
  }
  let leftLimit = -1;
  let rightLimit = N;
  let dx = 1;
  let dy = 0;
  let x = 0;
  let y = 0;
  for (let i = 1; i <= N * N; i++) {
    arr[y][x] = i;
    if (dx !== 0 && (x + dx === rightLimit || x + dx === leftLimit)) {
      dy = dx;
      dx = 0;
      if (dy < 0) {
        leftLimit++;
      }
  } else if (dy !== 0 && (y + dy === rightLimit || y + dy === leftLimit)) {
      dx = dy * -1;
      dy = 0;
      if (dx < 0) {
        rightLimit--;
      }
    }
    x += dx;
    y += dy;
  }
  console.table(arr);
}

python(5)