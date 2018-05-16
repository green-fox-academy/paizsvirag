'use strict';

export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readMyFile(filePath: string) {
    try {
        return fs.readFileSync('my-file.txt', charEncoding);
    } catch (error) {
        return 'Unable to read file: my-file.txt';
    };
};

 console.log(readMyFile('my-file.txt'));


