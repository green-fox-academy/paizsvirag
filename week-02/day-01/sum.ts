'use strict'

export {};


let number: number = 130

function sum(number) {
    let total:number = (number * (number+1)) / 2;
    
      for(let i: number = 1; i <= number ; i++){
        total += i;
      }
      return total;
  }

console.log(sum (number))