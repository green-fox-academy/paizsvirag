'use strict';


export {};


let a: number = 3;
a +=4 
console.log( a );

let b: number = 100;
b -=7
console.log( b );

let c: number = 44;
c= c*2
console.log(c);

let d: number = 125;
d= d/5
console.log(d);

let e: number = 8;
console.log(e ** 3);

let f1: number = 123;
let f2: number = 345;

if( f1 > f2 ) {
    console.log( `f1 is bigger than f2`)
}

let g1: number = 350;
let g2: number = 200;

if (g2 * 2 > g1) {
    console.log('the double of g2 is bigger than g1')
}


let h: number = 1357988018575474;

if (h % 10 === 0) {
    console.log('h has 11 as divisor')
};

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if ( i1 > i2 **2 && i1 > i2 ** 3) {
    console.log('i1 is higher than i2 squared and smaller than i2 cubed')
};

let j: number = 1521;

if(j % 3 === 0 || j % 5 === 0) {
    console.log('j is dividable by 3 or 5 ')
}

let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k + k + k + k);