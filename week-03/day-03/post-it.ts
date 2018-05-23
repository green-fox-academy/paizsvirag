'use strict';

class postIt {
    backgroundColor: string;
    text: string;
    textColor: string;
}

let first = new postIt();
first.backgroundColor = 'orange';
first.text = 'Idea 1';
first.textColor = 'blue';

let second = new postIt();
second.backgroundColor = 'pink';
second.text = 'Awesome';
second.textColor = 'black';

let third = new postIt();
third.backgroundColor = 'yellow';
third.text = 'Superb!';
third.textColor = 'green';

console.log(first);
console.log(second);
console.log(third);