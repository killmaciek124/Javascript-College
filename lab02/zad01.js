'use strict';
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9, -43];
let unikatowe = [];
for (let i=0; i<numbers.length; i++) {
    let licznik = 0;
    for (let j=0; j<numbers.length; j++) {
        if (numbers[i] == numbers[j]) {
            licznik+=1;
        }
    }
    if (licznik == 1) {
        unikatowe.push(numbers[i]);
    } 
}
console.log(unikatowe);