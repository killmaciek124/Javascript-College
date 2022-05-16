//'use strict';

// 1.1 
// Co wyświetlą na ekranie poniższe wywołania?

const book = { // INHERITANCE = DZIEDZICZNOSC ! 
    title: "Potop",
    author: "Henryk Sienkiewicz"
}
// console.log(book.__proto__ === Object.prototype); // Prototypes are the mechanism by which JavaScript objects inherit features from one another
// console.log(book.__proto__.__proto__ === null);

// 1.2. 
// Zastanów się, co należy wpisać w miejsce ..., tak aby każde wywołanie po odkomentowaniu zwróciło true.

const animals = ["dog", "cat", "rabbit", "hamster"];

// console.log(animals.__proto__ === Array.prototype);
// console.log(animals.__proto__.__proto__ === Object.prototype);
// console.log(animals.__proto__.__proto__.__proto__ === null);
/// artykuł ? =>>> https://ach-te-internety.pl/prototype-vs-proto/

// 1.3. 
// Co zostanie wyświetlone na ekranie w poniższym przykładzie?

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');
dog.whatIs = function () {
    console.log("It's a " + this.whatIs());
}

// console.log(dog.__proto__ === Animal.prototype);
// console.log(dog.__proto__ === cat.__proto__);

// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year) wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".



function isOlder(year) {
        if (year > 2000) {
            console.log("TRUE")
            return true
        }else {
            console.log("FALSE!")
            return false
        }
    }

function CreateMovie(director,title, year="unknown") { 
    this.director = director
    this.title = title
    this.year =  year

}



const newMovie = new CreateMovie("Pecior", "szybcy", 2001)
// DWIE OPCJE DODANIA FUNKCJI !!!
CreateMovie.prototype.isOlder = isOlder // WAŻNE że bez nawiasow
CreateMovie.prototype.print = function () { // tutaj dodanie odrazu z cialem funkcji!
    console.log(`${this.director}: ${this.title} (${this.year})`);
  };
console.log(newMovie) 
newMovie.isOlder(newMovie.year)                
newMovie.print() // dziala!!!!
// Następnie nie zmieniając implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracającą true/false w zależności od tego, czy podany film jest młodszy/starszy nić rok 2000.
// * print - wyświetlającą: "director: title (year)"


// 1.5.
// Uzupełnij poniższy konstruktor o inicjalizację name, type i funkcję printInstrument. Funkcja printInstrument powinna być współdzielona między wszystkie utworzone obiekty.

function CreateInstrument(name, type) {
    const instrument = Object.create({
      name: name,
      type: type,
      printInstrument() {
        console.log(this.name);
      },
    });
  
    return instrument;
  }
  const violin = CreateInstrument("wiolonczel", "");
  const guitar = CreateInstrument("guitarek", "");
  
//   violin.printInstrument();
//   guitar.printInstrument();
// 1.6. 
// Uzupełnij poniższy konstruktor, który tworzy obiekt dziedziczący po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcję setStrings(number), która ustala liczbę strun w instrumencie (ta funkcja też powinna być współdzielona). NewStringInstrument powinien mieć też dostęp do funkcji, która znajduje się w Instrument.
// Podpowiedź: aby zmienić wartość zmiennej __proto__ należy użyć - Object.setPrototypeOf(object, prototype) - należy użyć tej funkcji dwa razy w tym rozwiązaniu. 

function CreateStringedInstrument(name, type, stringsCount) {
    const newStringedInstrument = {
      name,
      type,
      stringsCount,
      setStrings(stringsCount) {
        this.stringsCount = stringsCount;
      },
    };
    Object.setPrototypeOf(newStringedInstrument, CreateInstrument()); // to jest tylko do funkcji printInstrument !!
  
    return newStringedInstrument;
  }


const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy');

// stringedInstrument.printInstrument();
// console.log(stringedInstrument);
// stringedInstrument.setStrings(3);
// console.log(stringedInstrument);



// 1.7. 
// Przeanalizuj poniższy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: "+this.name+", typ: " + this.type); // dodałem tutaj 2x this
}

function StringedInstrument(stringsCount, name, type) {
    Instrument.apply(this, name, type); // defaultowo bylo call() = (bierze podane argumenty oddzielnie)
    this.stringsCount = stringsCount;       // .. apply() = (bierze argumenty jako array (handy))
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) Stwórz instancję StringedInstrument.
obj = new Instrument("flet", "Detyyyy");

// b) W jaki sposób odwołać się do metody printInstrument?
obj.printInstrument()
// c) Zastąp wywołanie call() funkcją apply() 

// 1.8.
// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły Mammal (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()) . 
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, 
// a następnie mnożyła wynik razy 4 i wyświetlała go) i Salmon (z funkcją catch()), które będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.

// TO DO Z JACKIEM !!

const Animal = {
    name: this.name,
    printName: function printName() {
        console.log(this.name)
    }
}

const Mammal = {
    age: this.age,
    getAge: function getAge() {
        return this.age
    }
}

const Fish = {
    weight: this.weight,
    increaseWeight: function increaseWeight() {
        return this.weight++
    }
}

const Dog = {
    breed: this.breed,
}