'use strict';

export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'


function countTheLines (filePath: string) {
    try {
        let myNewFile: string = fs.readFileSync('my-file.txt', charEncoding);
        return  myNewFile.split(/\r\n|\r|\n/).length;
        
    } catch(error) {
        return 0;
    }
}

console.log(countTheLines('my-file.txt'));