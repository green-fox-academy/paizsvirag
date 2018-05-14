'use strict';

export {};

function printParams(myBirthYear: number = 1996, myBirthMonth: string = 'October', myBirthDay: number = 4) {
    console.log( `${myBirthYear}.${myBirthMonth}.${myBirthDay}`);
};

printParams();