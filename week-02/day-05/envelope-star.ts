'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//the rigth-side top
//
//
//

function envStarRightTop(numberOfLines: number) {

    let numberOfX: number = (canvas.width / 2) / numberOfLines;
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = (canvas.width / 2);
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(x, canvas.height / 2);
        ctx.stroke();
        x += numberOfX;
        y += numberOfY;
    }
}

//the right-side bottom
//
//
//

function envStarRightBot(numberOfLines: number) {
    let numberOfX: number = (canvas.width / 2) / numberOfLines;
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = 0;
    let y: number = canvas.height / 2;


    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(canvas.width - x, canvas.height / 2);
        ctx.stroke();
    }
}

//the left side top
//
//
//

function envStarLeftTop(numberOfLines: number) {
    let numberOfX: number = (canvas.width / 2) / numberOfLines;
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, (canvas.height /2) - y);
        ctx.stroke();
    }

}


//the left side bottom
//
//
//

function envStarLeftBot(numberOfLines: number) {
    let numberOfX: number = (canvas.width / 2) / numberOfLines;
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = 0;
    let y: number = canvas.height / 2;

    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(x, canvas.height / 2);
        ctx.stroke();
    }
}

envStarRightTop(20);
envStarRightBot(20);
envStarLeftTop(20)
envStarLeftBot(20);