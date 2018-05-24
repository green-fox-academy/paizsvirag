'use strict';

export{}

function counter(n: number): number {
  if (n === 0) {
    console.log(n)
    return n;
  } else {
    console.log(n)
    return counter(n - 1);
  }
}

counter(10)