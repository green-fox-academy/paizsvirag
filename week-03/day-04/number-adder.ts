'use strict';

function factorial(n: number) {
  let fact = 1;
  for(var i = 0; i < n; i += 1){
    fact *= i + 1;
  }
  return fact;
}

console.log('5! is', factorial(5));