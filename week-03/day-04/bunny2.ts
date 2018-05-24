// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict';

export{};

let flippyEars: number = 0;

function mutantBunnies(bunnies: number): number {
  if(bunnies <= 1){
    return flippyEars + 2;
  } else {
    if(bunnies % 2 === 0) {
      return flippyEars += mutantBunnies(bunnies - 1) + 3;
    } else {
      return flippyEars += mutantBunnies(bunnies - 1) + 2;
    };
  };
};

console.log(mutantBunnies(2));