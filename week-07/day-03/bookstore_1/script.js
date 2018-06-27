'use strict';

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/api', true);
http.onload = () => {
  const res = JSON.parse(http.responseText);
  let list = document.createElement('ul');
  document.querySelector('body').appendChild(list);
  res.booknames.forEach(element => {
    list.appendChild(document.createElement('li')).innerHTML = element.book_name;
  });
};
http.send();
