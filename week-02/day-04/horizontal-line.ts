'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function horizontalLines(x: number, y: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.strokeStyle = 'green'
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 50, y);
        ctx.stroke();
        y += 100;
    };
};

horizontalLines(200, 100);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.
