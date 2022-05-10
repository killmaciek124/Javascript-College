const { lp3 } = require('./toplist');


// //zad10 USE GROUPBY ! 

// for (i=0; i<lp3.length;i++) {
//     console.log()
// }

// //zad07
                      
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//     for (let i = 0; i < 5; i++) {
//         await sleep(i * 1000);
//         console.log(lp3[i]);
//     }
//     console.log('Done');
// }

// demo();
    

// //zad06

// function randomSong(n,min,max) {
//     songIndex = generateRandom(min,max);
//     while (n>0) {
//         console.log(lp3[songIndex]);
//         n-=1
//     }
// }

// function generateRandom(min = 0, max = 100) {

//     // find diff
//     let difference = max - min;

//     // generate random number 
//     let rand = Math.random();

//     // multiply with difference 
//     rand = Math.floor( rand * difference);

//     // add with min value 
//     rand = rand + min;

//     return rand;
// }

// console.log(randomSong(3,0,3));