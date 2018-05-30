'use strict';

export {};

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  reproduction: string;

  constructor() {
    this.reproduction = 'laying eggs';
  }

  getName() { };

  breed() { };

  yrOld(a: number) { };

  whatGender(gender: string) { }

};


class Reptile extends Animal {

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
  breed() {
    return this.reproduction;
  };

  yrOld(year: number) {
    console.log(`This is a(n) ${year} old ${this.name}`);
  };

  whatGender(gender: string) {
    console.log ( `The ${this.name} is a ${this.gender}`);
  };
};

class Mammal extends Animal {

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
  breed() {
    return 'pushing miniature versions out';
  };

  yrOld(year: number) {
    console.log(`This is a(n) ${year} old ${this.name}`);
  };

  whatGender(gender: string) {
    console.log ( `The ${this.name} is a ${this.gender}`);
  };
};


class Bird extends Animal {

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
  breed() {
    return this.reproduction;
  };

  yrOld(year: number) {
    console.log(`This is a(n) ${year} old ${this.name}`);
  };

  whatGender(gender: string) {
    console.log ( `The ${this.name} is a ${this.gender}`);
  };
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

