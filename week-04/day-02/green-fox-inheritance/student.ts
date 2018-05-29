'use strict';

import { Person } from './person';

export class Student extends Person {
  protected previousOrganization: string;
  skippedDays: number = 0;
  public numberOfDays: number = 0;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }

  skipDays(numberOfDays) {
    this.skippedDays += this.numberOfDays;
    return this.skippedDays;
  }

  getGoal() {
    console.log('Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }
};