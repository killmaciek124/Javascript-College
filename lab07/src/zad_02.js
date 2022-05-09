const { lp3 } = require('./toplist');
const lodash = require('lodash');
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

// REMINDER: _.map(users, 'id'); // [12, 14, 16, 18] zwraca nam liste w ktorej są wartości w kazdym ID 
//zad04

// let foo = lodash.pickBy(lp3[0], lodash.isString);
// console.log(foo)

//zad05

// function isNumber(list) {
    
//     for (i = 0; i<list.length; i++) {
//         if (lodash.isNumber(list[i]) === false) {
//             return false
//         }
// }
// }   

// list=[1,2];
// isNumber(list);
// lodash.forEach(list, function(value) {
//     console.log(lp3[value])
//   });

//zad06

// function randomSong(n,min,max) {
//     songIndex = lodash.random(min,max);
//     while (n>0) {
//         console.log(lp3[songIndex]);
//         n-=1
//     }
// }

// randomSong(3,0,3);

//zad07
                        
// let func = number => {
//     console.log(number);
//   };
    
//   // Defining for loop
//   for(let i = 0; i <= 10; i++) {
        
//       // Using the _.delay() method
//       // with its parameter
//       lodash.delay(func, 2000 * (i+1), lp3[i]);
//   }
    
//   // Prints the integer after this line
//   console.log('Songs are as follows:');
    
//zad08

// result = lodash.filter(lp3, function(o) { return o.change<0; });
// console.log(result)

//zad09
// newDict ={} 
// lodash.forEach(lp3, function(object) {
//     newDict[object.song] = object
//   });
// console.log(newDict);

//zad10 USE GROUPBY ! 

// bandSongs = {}
// lodash.forEach(lp3, function(object) {
//     bandSongs[object.author] = [object
//   });

//zad11





