'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

// isEquals(2, '2'); // A, D
// isEquals(null, undefined); // A D
// isEquals(undefined, NaN); // B D 
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); // B D 
// isEquals(0, ''); // A D 
// isEquals('0', ''); // B D  
// isEquals(+0, -0); // A C 
// isEquals(0, false); // A D 
// isEquals(0, 'false'); // B D 
// isEquals([1, 2], '1,2'); // A D 

!!false; // podwojne negacje czyli to samo zwraca
!!true;
console.log(!!undefined);
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik 

// const person = {
//     firstName: 'Jan',
//     lastName: 'Kowalski'
// }

// console.log(person);
// person = {}; // błąd
// console.log(person);

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik = wypisuje nam consollog number (3), potem 
// .. w klamrach dajemy nowa wartosc i wyswietlamy number (4)
// ..  potem poza klamrami number ma wartosc poczatkowo czyli (3)

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'? ODP : wyciąga nam wartosci z tablicy (znikaja nawiasy tablicy)

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik w jednej tablicy beda elementy z jedna tablica 
// w drugim arrayu beda same elementy ( nie bedzie tablcy w srodku )

// const word = 'javascript'; // W PRZYPADKU STRINGA ZOSTAINE ON PODZIELONY NA LITERKI 
// const arrWord = [...word];
// console.log(arrWord);

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego? // result = NaN
// 

// var hello = 'Hello world!';
// var result = hello / 2;

// console.log(result); 

// Number.isNaN(result);
// Number.isNaN(hello);

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// var car = 'BMW';

// function showCar() {
//     car = 'Audi';
//     model = 'A5';
//     console.log('Great car!');
// }

// showCar();

// car;
// model;



// var name = 'Bryan';

// (function differentName() {
//     var name = 'Adam';
//     console.log(name);
// })();

// console.log(name);



// if (true) {
//     var a = 2;
// }
// console.log(a);

// if (true) {
//     const b = 2;
// }
// console.log(b);



// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);



// var test = "var1";
// var test = "var2"; // mozemy nadpisywac wartosci dla var (zmienna = VARIABLE)

// let test2 = "let1";
// let test2 = "let2"; // nie mozemy nadpisywac wartosci dla let (STAła, LET CONSTANT)

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?
// ODP : Skrypt zostanie wykonany w trybie strict (łatwiej pisac bezpieczny kod, np nie mozna niedeklarowac zmiennych)

// TEORIA 
const arr1 = [1,3,4];
const arr2 = [5,7,8];

// SPŁASZCZANIE TABLIC 
console.log([...arr1, ...arr2]);