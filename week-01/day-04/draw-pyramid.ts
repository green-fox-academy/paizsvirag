'use strict';

export{}

let lineCount: number = 4;

for (let i: number = 0; i < lineCount; i++) {
    let star: string = ' ';
    for (let j: number = 1; j < lineCount-i; j++) {
      star = star + ' ';
    }
    for (let k: number = 1; k <= (2 * i+1); k++) {
      star = star + '*';
    }
    console.log(star)
  }