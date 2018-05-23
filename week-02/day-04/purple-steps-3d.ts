'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function purpleSteps3D(x: number, y: number, a: number) {
    for (let i: number = 0; i < 7; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(x, y, a, a);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x, y, a, a);
        x += a
        y += a
        a += 10
    };
};

purpleSteps3D(20, 20, 20);