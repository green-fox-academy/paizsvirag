'use strict';

function reload() { 
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:8080/game', true);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onload = () => {
    const res = JSON.parse(http.responseText);
    const main = document.querySelector('.container');
    const question = document.createElement('p');
    question.className = 'question';
    main.appendChild(question);
    question.innerHTML= res.question;
    res.answers.forEach(element => {
      const button = document.createElement('button');
      button.className = 'answers';
      main.appendChild(button);
      button.innerHTML = element.answer;
      button.addEventListener('click', event => {
        if(element.is_correct == 1) {
          document.querySelector('#score').innerHTML = +document.querySelector('#score').innerHTML + 1;
          main.innerHTML = '';
          reload();
        }
      })
    });
  };
  http.send();
}

reload();
