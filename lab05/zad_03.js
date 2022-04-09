'use strict';

//Make sure you have Node and NPM installed
//Run npm install prompt-sync in the terminal

const prompt = require('prompt-sync')();
var list = prompt('Wpisz liczby do listy: ');
list = (Array.from(list));
console.log(list);
const operation = list.reduce(function(akumulator, number) {
    const index = list.indexOf(number);
    var IndexInt = ""+index+" : "+number+""
    akumulator.push(IndexInt);
    return akumulator


 // DOKONCZ ZADANIE     
}, [] );
var output = operation;
for (let i = 0; i<output.length; i++ ) {
    console.log(output[i])
}

