'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=4Ovid6IUAn9ZrZWxTDidvKeWu5tJeng9&q=kitty&limit=16&offset=0&rating=G&lang=en',true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('#pics');
  response.data.forEach((element) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src = element.images.fixed_width_still.url;
    image.addEventListener('click', () => {
      image.setAttribute('src', element.images.fixed_height.url)
    });
    container.appendChild(image);
  });
};
const btn = document.querySelector('#getimages');
btn.addEventListener('click', () => {
  http.send();
})

