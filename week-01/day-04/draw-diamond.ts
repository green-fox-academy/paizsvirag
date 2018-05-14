'use strict'

export{}

let lineCount: number = 7;

let space: string = ' '
let sharp: string = '*'

for (let current: number = 0; current <= lineCount; current++) {
    if ( current < lineCount / 2) {
        for ( let j: number = 0; j < lineCount; j++) {
            let star: string = ' ';
                for ( let k: number = 1; k < lineCount - j; k++) {
                    star = star + space;
                };
                for ( let l: number = 1; l <= ( 2 * j + 1 ); l++) {
                    star = star + sharp;
                };
            console.log( star )
            current++;
        };
    } 
        for ( let j: number = lineCount - current; j <= lineCount && j >= 0; j-- ) {
            let secondStar: string= ' ';
            for (let k: number = 1; k < lineCount /2 - j; k++) {
                secondStar = secondStar + space;
            };
            for (let l: number = 1; l <= ( 2 * j + 1); l++) {
                secondStar = secondStar + sharp;
            }
            console.log(secondStar);
            current++;
         }
    
}