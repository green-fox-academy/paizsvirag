'use strict';

export{};
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function copyFile(filePath: string, anotherFilePath: string) {
    let theNewFile: string = fs.readFileSync('my-file.txt', charEncoding);
    try{
        fs.writeFileSync('my2ndfile.txt',theNewFile);
        return true;
    }catch(error){
        return false;
    };
};

console.log(copyFile('my-file.txt','my2ndfile.txt'));

