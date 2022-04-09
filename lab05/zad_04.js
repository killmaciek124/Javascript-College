'use strict';

var input = [  // nie wiem jak zrobic input obiektu w konsoli lol
    { id: 'abc', name: 'Ala' }, 
     { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
  ] ;

const operation = input.reduce(function(akumulator, object) {
    var newobject = {};
    newobject[object.id] = object;
    akumulator.push(newobject);
    // console.log("NO",newobject);
    return akumulator

}, []);

console.log(operation);
