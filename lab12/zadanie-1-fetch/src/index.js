'use strict';
import fetch from 'node-fetch'
/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
fetch('https://jsonplaceholder.typicode.com/posts') // drugi parametr jest opcjonalny (np jesli chcemy uzyć POST zamiast GET)
// .then(response => response.json()) // <= !!! ta linia sprawia że zamieniamy promisa na TYLKO DANE! (bez statusów itp) 
// .then(data => console.log(data))  // linia do sprawdzenia linii powyzej 
.then(response => {
    if (response.status !== 200) { // if (response.ok) działa dla przedzialu 200-299
      throw new Error('Network response was not OK');
    } else {
        // console.log(response)
        return response
    }
  })
.then(response => {
    const { body: data, headers } = response; // to co jest w Body to zmienna DATA (chyba), || Destrukturyzacja obiektu
    // console.log("data: ", data) // albo data to response.json() idk
    // console.log("headers: ", headers)
})

 

/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/
const object1 = {
  idUser: 1,
  title: "Tytulik",
  completed: true
}

function dupa(object) {
  fetch('https://jsonplaceholder.typicode.com/todos', {
	method: 'POST',
	body: JSON.stringify({
		object
	}),
	headers: {
		'Content-type': 'application/json' // charset utf8 jeszcze moze byc tu
	}
})
.then( response => {
  if (response.ok) {
    console.log("Dodano, " + object.idUser)
  } else {
    console.log("Błąd!")
  }

})
}
dupa(object1)