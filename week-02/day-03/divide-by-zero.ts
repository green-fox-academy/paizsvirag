'use strict';

export{};


function division(a: number) {
    if (a / 10 === 0) {
      throw new Error(`Can't divide`);
    }
    return a / 10;
  }
  
  try {
    console.log(division(0));
  } catch(error) {
    console.log('fail');
  } finally {
    console.log('The function has ended.');
  }