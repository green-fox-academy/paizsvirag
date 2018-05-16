'use strict';

export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function writeToFile(filePath: string, content: string) {
    try {
        fs.writeFileSync('my-file.txt', 'paizs virág');
        return fs.readFileSync('my-file.txt', charEncoding)
    } catch (error) {
        return 'Unable to write file: my-file.txt';
    };
};

console.log(writeToFile('my-file.txt', 'paizs virág'));