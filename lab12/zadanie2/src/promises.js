'use strict';

// Zadanie 2.1. 
// Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 2 sekundach i zwróci string 'Udało się!'. 
// Jako callback niech wypisze zwrócony string w konsoli.

let foo = new Promise((resolve, rejcect) => {
    setTimeout(() => {
        //resolve("Udało się!") // jeśli resolve się wykona, to przekazujemy parametr resolve do THEN !!!!
        rejcect("porAŻKA")  // jeśli wykona się reject, to parametr reject przekazujemy do CATCHA
    }, 2000)
})
foo.then(resp => console.log(resp))
.catch(resp => console.log(resp))

// Zadanie 2.2.
// Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.
const promise1 = new Promise((resolve, reject) => {
    resolve("porazka");
  }).then((string) => {
    console.log(string);
});


// Zadanie 2.3.
// Zamiast then(), zmodyfikuj powyższy kod używając catch()
// DONE WYŻEJ
// Zadanie 2.4. 
// Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli.

function multiplyAsync(x,y) { // POPRAWIONE ZADANKO !!!!!!!
    const res = new Promise((resolve,reject) => {
        if (typeof(x) === "number" && typeof(y)=== "number") {
            return resolve(x*y)
        } else {
            reject("PORAZKA ! ")
        }
    })
    return res
}
multiplyAsync(2,2)
.then(res => {console.log(res)
    throw new Error("errror") // mozemy jebnac errrorka w thenie
})
.then(res => {
    console.log(res)
    },reason => { console.log("Error occured : " + reason)}) // możemy dodać sobie reason w nastepnym thenie (ktory przechwyci error) (wtedy niepotrzebny catch)
    // .catch(res => console.log(res))

// JAK UNIKNĄĆ CALLBACK HELL ? 
// odp : Możemy zwracać coś w THEN : 
// .then(res => {
//     console.log(res)
//     return res + 2
// })
// .then(res => {
//     console.log(res)
//     return res*3
// })
// .then(res => {
//     console.log(res)
// }) // żeby potem użyć CATCH, muszę w THEN stworzyć nowego PROMISE( a w nim jebnac REJECT)
