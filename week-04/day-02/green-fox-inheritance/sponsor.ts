'use strict'

import { Person } from "./person";

export class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;

  constructor (name: string, age: number, gender: string, company: string) {
    super(name,age,gender);
    this.company = company;
  }

  hire(){
    this.hiredStudents++;
    return this.hiredStudents;
  }

  introduce() {
    console.log (`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents company and hired ${this.hiredStudents} students so far.`)
  }

  getGoal() {
    console.log("Hire brilliant junior software developers.");
  }
};