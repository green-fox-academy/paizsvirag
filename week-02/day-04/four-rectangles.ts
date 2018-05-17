'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(110, 110, 100, 100);

ctx.fillStyle = 'green';
ctx.fillRect(210, 210, 100, 150);

ctx.fillStyle = 'purple';
ctx.fillRect(300, 300, 100, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 50, 50);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
