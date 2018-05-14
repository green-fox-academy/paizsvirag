'use strict';

export{};

function factorio(factorThis:number) {
    let rval: number =1;
    for (let i: number = 2; i <= factorThis; i++)
        rval = rval * i;
    return rval;
}

console.log(factorio(4)); 
