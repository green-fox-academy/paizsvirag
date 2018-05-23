'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number){
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  };

  use(){
    this.inkAmount--;
    console.log(`Only ${this.inkAmount} ink remained.`);
  };
};

let newSharpie = new Sharpie('yellow',23.1);

console.log(newSharpie);

newSharpie.use();