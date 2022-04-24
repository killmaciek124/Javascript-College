const buyList = require('./listaZakupow.js').listaZakupow;
//zad1
// const reverse = buyList.reduce(function(akumulator,object) {
//     akumulator[object.produkt] = object;
//     return akumulator
    
// },{});

// console.log(reverse);

//zad2 

// const diaryPrice = buyList.reduce(function(akumulator,object) {
    
//     if (object.typ === "nabiał") {
//         akumulator+=((object.ilosc)*(object.cena)) 
//     }
//     return akumulator
   
   
    
    
// },0);

// console.log(diaryPrice);

//zad3

// const foo = buyList.reduce(function(akumulator,object) {
//     console.log(akumulator);
//     if (object.jednostka === "kg") {
//         akumulator.push(object.produkt);
//        return akumulator.sort()

//     } else {
//         return akumulator.sort()
//     }
// },[]);

// console.log(foo);

//zad4

// function fool(type){ // skoncz pozniej ! 
//     const foo = buyList.reduce(function(akumulator,object) {
//         console.log(akumulator, object);
//         if (object.typ === type && ((object.cena*object.ilosc) <= 10)) {
//             akumulator.push(object.produkt)
//         } else {
//             return akumulator
//         }
//     },[]);
    
//     console.log(foo);

// }

// console.log(fool("owoce"))


//zad 5

// const foo = buyList.reduce(function(akumulator,object) {
//     // console.log(akumulator);
//     if (object.jednostka === "sztuk") {
//         akumulator.push(object.produkt);
//        return akumulator

//     } else {
//         return akumulator
//     }
// },[]);

// console.log(foo);


//zad6 
 // skoncz bo DZIWNE ! 

// const foo = buyList.reduce(function(akumulator,object) {
//     nameCapitalized = object.typ.charAt(0).toUpperCase() + object.typ.slice(1)
//     akumulator+= ""+nameCapitalized+":\n"
//     for (let i = 0; i<buyList.length)
//     return akumulator
// },"");

// console.log(foo);


//zad7 

// TEŻ DOKOŃCZ !!!!



