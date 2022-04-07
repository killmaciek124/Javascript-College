'use strict';

//Make sure you have Node and NPM installed
//Run npm install prompt-sync in the terminal

const prompt = require('prompt-sync')();
const list = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Array(list));

const operation = list.reduce(function(akumulator, number) {

    if (number > 0) {
        number=number*number;
        akumulator.push(number);
        
    } 
    return akumulator


 // DOKONCZ ZADANIE     
}, [] );

