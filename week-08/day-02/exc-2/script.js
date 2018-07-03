'use strict';

window.addEventListener('keyup', (event) => {
  document.querySelector('h1').innerHTML = `Last pressed key code is: ${event.keyCode}`;
});

