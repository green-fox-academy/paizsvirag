'use string';

export{};

let floppyEars: number = 0;

function bunnyEars(bunnies: number) {
  if( bunnies === 0){
  return floppyEars;
  } else{
  floppyEars += 2;
  return bunnyEars(bunnies - 1); 
  }
}

console.log(bunnyEars(32));