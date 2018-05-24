'use strict';

export{};

function powerN(base: number, n: number) {
  if(n === 1) {
    return base;
  };
  return base * powerN(base, n - 1);
};

console.log(powerN(2, 10));