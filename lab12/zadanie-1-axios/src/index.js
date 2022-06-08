'use strict';
const axios = require('axios');
/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
    if (resp.status === 200) {
        // console.log(resp)
        return resp
    } 
  })
  .then(resp => {
    const {data, headers} = resp
    // console.log("data : ", data)
    // console.log("headers : ", headers)
  })
  .catch(err => console.log("Errror"))
 
   
/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

const object1 = {
    idUser: 2,
    title: "Tytulik",
    completed: true
  }
  
function dupa(object) { 
    axios.post('https://jsonplaceholder.typicode.com/todos', 
        object
    )
    .then( response => {
      console.log("Dodano, " + object.idUser)
  })
  .catch(err => { console.log("Blad!")})
}

dupa(object1)