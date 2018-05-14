'use strict'

export{}

let lineCount: number = 4

for (let i: number = 0; i < lineCount; i++) {
    let star: string = ' ';
    for (let k: number = 1; k <= (i+1); k++) {
        star = star + '*';
      }
      console.log(star);
}

