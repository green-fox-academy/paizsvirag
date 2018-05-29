import { Mentor } from "./mentor";
import { Student } from "./student";
import { Person } from './person';
import { Cohort } from './cohort';
import { Sponsor } from './sponsor';


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);


for (let i = 0; i < 6; i++) {
  elon.hire();
}


for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(john);
awesome.addMentor(gandhi);
awesome.info();