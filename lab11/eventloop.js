'use strict';
// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()



// function helloWorld() {
//     console.log('Hello world!');
// }
// setTimeout(helloWorld, 1000)


// console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.
// function foo() {
//     console.log("Start")
//     setTimeout(()=>  console.log("Konie"),1000)
  


// }
// foo()
// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.
// setInterval(() => console.log("JESTEM Z OLSZTYNA "), 1000)
// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval

// const timer = setInterval(() => console.log("JESTEM Z OLSZTYNA"), 1000)

// setTimeout(()=> {
//     clearTimeout(timer)
// }, 5000);

// Zadanie 1.5. 
// Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby.
// Funkcja będzie wywołała podaną w argumencie funkcję co x ssekund i automatycznie zatrzyma się po upływie y sekund. 
function foo(func, x,y) {
    const timer = setInterval(() => func(), x*1000)
    setTimeout(()=> {
        clearTimeout(timer)
    }, y*1000);
}

function print() {
    console.log("DUPA")
}
foo(print, 1,5)