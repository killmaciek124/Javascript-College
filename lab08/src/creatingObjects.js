// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

// const book0 = {
//   title: "Karol pet",
//   author: "Mikey",
//   print: function print(){
//     console.log(this.author,"-",this.title) // this czyli element tego obiektu
//   }
// };


// // book0.print();

// const book1 = {};
// Object.assign(book1, book0);

// //book1.print();

// const book2 = Object.create(book1);
// book2.title = "book2title"
// book2.author = "book2author"

// book2.print();

function BookCreator(title, author) {
  const b = {}
  b["title"] = title
  b["author"] = author
  b["print"] = function print(){
    console.log(this.author,"-",this.title) // this czyli element tego obiektu
  }
  b["readers"] = 0
  b["addReaders"] = function addReaders(){
    b.readers+=1
  }
  //console.log(b)
  return b
}

const book3 = BookCreator("Cień wiatru", "Carlos Ruiz Zafon");
const book4 = BookCreator("Ojciech Chrzestny", "Mario Puzo");
book4.addReaders()
book4.addReaders()

console.log(book4)
// book3.print();
// book4.print();
// zad 1 DONE ! 
// // ========================================
// // ZADANIE 2 TU ZACZNIJ !!! 
// // ========================================

// // Przetestuj poniższy kod i odpowiedz na pytania

// function testThis() {
//   console.log(this);
// }

// testThis();  // Window, globalny obiekt 

// function testThis2() {
//   "use strict";
//   console.log(this);
// }

// testThis2(); // UNDEFINED

// // 2.1. Czym jest this?
// // 2.2. Do czego odwołuje się this w obu przypadkach = DOM ( Document object model)

// const person = {
//   name: "Oscar Wilde",
//   print() {
//     console.log("a: "+this.name+"");

//     function a() {
//       // console.log(this);
//     }
//     a();
//   },
// };
// person.print();

// // 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego? this w pierwszym przypadku odwoluje sie do obiektu person, w drugim globalnie
// // 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function () {
  console.log(this.name);
};

const person1 = {
  name: "Aaron Towels",
};

const person2 = {
  name: "Tom Clancy",
}

//person1.printName = printName
// printName.call(person1)
// printName.call(person2)

//console.log(person1)

// // 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!

// const person3 = {
//   name: "Arthur Conan Doyle",
//   print() {
//     const a = () => {
//       console.log(this);
//     };
//     a();
//   },
// };
// person3.print();

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function? Scope = person3

// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1.
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?

// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title.
// Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
// Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
// Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.

// ========================================
// * ZADANIE 4
// ========================================

// Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller').
// ========================================
// Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania)
res = book4.hasOwnProperty('isBestseller') // zwraca True jeśli istnieje jakas wartosc dla klucza isBestseller
console.log(res)
// ========================================
// * ZADANIE 5
// ========================================

// Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy? Służy do łączenia obiektów PRZYKLAD : 
obj1 = {
  name: "Maciek"
}
obj2 = {
  age: 5
}
obj1.__proto__ = obj2

console.log(obj1.age) // 5 
console.log(obj1.name) // Maciek 
console.log(obj1) // { name: 'Maciek' } Czyli nie nadpisujemy obiektu