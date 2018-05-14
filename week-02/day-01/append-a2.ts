'use strict';

export { };

let animals: string[] = ["kuty", "macsk", "cic"];

animals.forEach(function (element) {
    element = element + 'a';
    console.log(element);
});

