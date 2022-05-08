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


//cANT DO
//zad7 

const highestPrice = buyList.reduce(function(akumulator,object) {
    if (object.cena>akumulator) {
        return object.cena
    }
    return akumulator
      
},buyList[0].cena);

console.log(highestPrice)

const cheapProducts = buyList.reduce(function(akumulator,object) {
    const finalPrice = object.cena*object.ilosc
    if (finalPrice < highestPrice) { 
        var newobject = {}
        newobject["cena"] = object.cena*object.ilosc
        akumulator[object.produkt] = newobject
    }
    return akumulator
},[]);
console.log(cheapProducts)


