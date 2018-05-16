'use stirct';

export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'


function writeMultipleLines(filePath: string, content: string, number: number) {
    try {
        let newContent: string= content;
        for (let i: number = 0; i < number; i++) {
            content = content +  '\r\n' + newContent;
        }
        fs.writeFileSync(filePath, content);
        return content;
    } catch (error) {
        return 'umm sorry its not working';
    };
};

console.log(writeMultipleLines('my-file.txt','work',5));
