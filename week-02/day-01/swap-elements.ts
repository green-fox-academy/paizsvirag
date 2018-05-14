'use strict';

export{};

let abc: string [] = ["Arthur", "Boe", "Chloe"];

abc.splice (0, 1, "Chloe");
abc.splice (2, 1, "Arthur");

console.log(abc);