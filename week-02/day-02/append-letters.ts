'use strict';

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(far) {
    far = far.map(i => i + 'a');
    return far;
};


console.log(appendA(far));

export = appendA;


