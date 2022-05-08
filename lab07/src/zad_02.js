const { lp3 } = require('./toplist');
const lodash = require('lodash');
console.log("DZIALA");
//ZACZNIJ ROBIC TUTAJ ZADANIA WSZYSTKO DZIALA


//zad01
// var QueenSongs = []
// for (i=0;i<lp3.length;i++) {
//     var arr = lodash.values(lp3[i]);
//     if (arr[0] === 'Queen') {
//         QueenSongs.push(arr[1])
//     }
// }
// console.log(QueenSongs);

//zad02

// var PinkFloydSongs = []
// for (i=0;i<lp3.length;i++) { // zamiast fora mozna zrobic lodash.forEach()
//     var arr = lodash.values(lp3[i]);
//     if (arr[3] >= 10 && arr[0] === 'Pink Floyd') {
//         PinkFloydSongs.push(arr[1])
//     }
// }
// console.log(PinkFloydSongs);


//zad03
// let n = 5 
// let result = lodash(lp3).sortBy(['change']).dropRight(n).value()

// console.log(result);

//zad04

let foo = {lodash.first(lp3)}
console.log(foo)