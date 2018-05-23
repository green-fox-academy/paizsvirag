'use strict';

export { };

class Animal {
    hunger: number;
    thirst: number;
    constructor() {
        this.hunger = 50;
        this.thirst = 50;
    }

    eat() {
        this.hunger--;
        console.log(`You ate something! Your hunger is now ${this.hunger}!`);
    }

    drink() {
        this.thirst--;
        console.log (`You drank water! Your thirst is now ${this.thirst}!`);
    }

    play() {
        this.hunger++;
        this.thirst++;
        console.log(`You played a lot! Your thirst is ${this.thirst} and your hunger is ${this.hunger}!`);
    }
}

let tiger = new Animal();

console.log(tiger);
tiger.play();
tiger.drink();

