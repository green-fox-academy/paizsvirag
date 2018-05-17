'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/*function diagonal(x: number, y: number) {
    if(x === 0 && y === 0) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(600, 400);
        ctx.stroke();
        return;
    } else if(x > 0 && y > 0) {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(0, 400);
        ctx.stroke()
        return;
    }
   return; 
}
diagonal(0, 0); */

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 400);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(600, 0);
ctx.lineTo(0, 400);
ctx.stroke();

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.