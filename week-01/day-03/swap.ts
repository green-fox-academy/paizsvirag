'use strict';

export{};

let a: number = 123;
let b: number = 526;
[a, b] = [b, a];

console.log(b);
console.log(a);