'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let rainbowColors: string [] =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function rainbowSquares(x:number,color: string[]) {
    for (let i: number = 0; i <= 7; i++){
        ctx.fillStyle = color[i];
        ctx.fillRect((600/2) - (x / 2), (400/2) - (x / 2), x, x);
        x -= 45;
    }
};

rainbowSquares(400, rainbowColors);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

