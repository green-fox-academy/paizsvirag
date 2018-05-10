'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let aDayHour: number = 24;
let aDayMinute: number = 60;
let aDaySeconds: number = 60;

let remainingHour: number = aDayHour - currentHours;
let remainingMinute: number = aDayMinute - currentMinutes;
let remainingSecond: number = aDaySeconds - currentSeconds;

console.log(`The remaining time from this day is ${remainingHour} : ${remainingMinute} : ${remainingSecond}.`);

console.log(`The reamining seconds from the day: ${60 *  (60 * (remainingHour)) + 60 * (remainingMinute) +  remainingSecond}`);
