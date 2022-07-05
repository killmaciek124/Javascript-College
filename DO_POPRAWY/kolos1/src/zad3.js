//WAZNA RÓZNICA MIEDZY ++i AND i++ 
// The only difference is the order of operations between the increment of
//  the variable and the value the operator returns. So basically ++i returns
//   the value after it is incremented, while i++ return the value before it is incremented. 
//   At the end, in both cases the i will have its value incremented.

// MOIMI SLOWAMI : 
/*
++i : 
zwraca wartosc PO INKREMENTACJI 

i++ :

zwracA wartosc PRZED INKREMENTACJĄ




*/

"use strict";

const getCounter = (min, max) => {
  let count = min-1 ; 
  let foo = "hello";

  return () => {    // baby funkcja czyli ta returnowana dziedzyczy wszystko po parencie (count, foo, min i max) (jak counter klasy)
    if (count < max ) {
        foo = "nothello";
        return ++count;
    } else {
        return undefined;
    }
  }
};

const counter = getCounter(5, 7); 

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


/*
// TO SAMO CO WYZEJ TYLKO W KLASACH 
class Counter {
    constructor(min,max) {
        this.max = max;
        this.count = min-1;
    }

    get() {
        if (this.count < this.max) {
            return ++this.count;
        }   else {
            return undefined;
        } 
    }
}

const counter = new Counter(5,7);
console.log(counter.get());
console.log(counter.get());
console.log(counter.get());
console.log(counter.get());

*/

