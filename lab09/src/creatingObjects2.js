// 1. Uprość funkcję BookCreator z poprzednich zajęć tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 
function print(){
    console.log(this.author,"-",this.title)
    console.log("TEST!!!") // this czyli element tego obiektu
}

function addReaders(){
    this.readers+=1
    console.log("TEST2!!!")
}
 // JAK TWORZYC OBIEKTY FUNKCJĄ! : 
function BookCreator(title, author,reader) {
    this.title = title
    this.author = author
    this.readers = reader
  }
const book1 = new BookCreator('Eagle', 'Talon TSi', 1993); // tworzenie obiektu ze słowem new! // bez new nie zadziala
console.log(book1)
// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.
BookCreator.prototype.print = print()
BookCreator.prototype.print = addReaders()
newBook1 = new BookCreator('pies', 'Tal', 1923)
newBook1.print
newBook1.addReaders
console.log(newBook1)

// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć powyższy efekt.
// class BookCreator {
//     constructor(title, author, reader) {
//         this.title = title
//         this.author = author
//         this.readers = reader
//     }
// }
// const book1 = new BookCreator('Eagle', 'Talon TSi', 1993); 
// console.log(book1)

// BookCreator.prototype.print = print()
// BookCreator.prototype.print = addReaders()
// newBook1 = new BookCreator('pies', 'Tal', 1923)
// newBook1.print
// newBook1.addReaders
// console.log(newBook1)

// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = (name, age) => ({
    name : name,
    age : age,
    addAge: function addAge() {
        return this.age+=1
    }

})
newPerson = Person("Maciej", 4)
newPerson.addAge()
console.log(newPerson)


// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)