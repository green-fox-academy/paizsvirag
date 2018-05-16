'use strict';

export{};

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function candyCount(students) {
    return students.map(students => {
        return `${students.name} have ${students.candies} candies`;
    })
}

console.log(candyCount(students)); 

function sumOfAge(students) {
    let studentAge: number = 0;
    students.map( students => {
        if(students.candies < 5) {
            studentAge += students.age;
        } 
    });
    return studentAge;    
};

console.log(sumOfAge(students));


// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
