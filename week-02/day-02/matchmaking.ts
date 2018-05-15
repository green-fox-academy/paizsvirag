'use strict';
// Write a  girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls, boys) {
    let pairs = [];
    let gurls = 0;
    let boiz = 0;
    for (let i: number = 0; i < 10; i++) {
        if (i % 2 == 0) {
            pairs[i] = girls[gurls];
            gurls++;
        }
        else {
            pairs[i] = boys[boiz];
            boiz++;
        };
    };
    return pairs;
};


console.log(makingMatches(girls, boys));

export = makingMatches;