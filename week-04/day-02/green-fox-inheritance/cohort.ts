'use strict';

import {Mentor} from "./mentor";
import {Student} from "./student";
import { Person } from './person';

export class Cohort {
  name: string;
  students: Student [];
  mentors: Mentor [];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  public addStudent(student: Student):void {
    this.students.push(student);
  }

  public addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

