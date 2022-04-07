'use strict';
const numbers = [-1,-2,4,5];
const operation = numbers.reduce(function(akumulator, number) {

    if (number > 0) {
        number=number*number;
        akumulator.push(number);
        
    } 
    return akumulator


    
}, [] );
console.log(operation);