const books = require('./books.js');

const result = books.booksArray.reduce(function(akum, object) {
    let groupKey = object.genre;
    if (!akum[groupKey]) {
      akum[groupKey] = [];
    }
    delete object["readers"];
    delete object["genre"]
    akum[groupKey].push(object);
    return akum;
},{});

console.log (result);

// Postać oczekiwanego wyniku
// {
//     'fantasy': [
//         { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//         { title: 'Harry Potter', author: 'J.K. Rowling' },
//         ...
//     ],
//     'fiction': [
//         { title: 'The Borthers Karamazov', author: 'Fyodor Dostoyevsky' },
//         ...
//     ],
//     ...
// }