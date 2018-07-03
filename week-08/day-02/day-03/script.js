'use strict';

//Create an event listener which logs the current timestamp to the console once the button is clicked.
//When the button is clicked for the second or any other times no event listener should be called.
//Try to solve this two different ways.
//hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
const button = document.querySelector('button');

let number = 0;

function func(){
  console.log(new Date);
  number++;
  if(number >= 2) {
    button.setAttribute('disabled', '');
    button.removeEventListener('click', func)
  };
};

button.addEventListener('click', func);

