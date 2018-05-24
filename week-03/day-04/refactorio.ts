'use strict';
export {};


function factorial(num: number): number {
  if (num <= 1) { //base case
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));