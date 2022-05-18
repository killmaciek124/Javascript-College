const harrypota = require('./potter.js');
const hogwardArray = harrypota.hogwardArray
// console.log(hogwardArray)
const resultArray = hogwardArray.reduce((akum, object) => {
    let groupKey = object.house;

    if (object.hogwartsStaff === true ) {
      object.type = "nauczyciel"
    } else if (object.hogwartsStudent === true ) {
      object.type = "student"
    } else {
      object.type = "none"
    }

    if (groupKey === "") {
        groupKey = "no house"
    }
    if (!akum[groupKey]) {
      akum[groupKey] = [];
    }
    
    const {gender, house, dateOfBirth,yearOfBirth,ancestry, eyeColour,hairColour,wand,patronus,hogwartsStaff,hogwartsStudent,actor,alive, image,species,...newObject} = object;
        

    akum[groupKey].push(newObject);
    return akum;

},[]);
console.log(resultArray)

// Oczekiwany output

// [
//   Gryffindor: [
//     { name: 'Harry Potter', type: 'student' },      
//     // ...
//   ],
//   Slytherin: [
//     { name: 'Draco Malfoy', type: 'student' },
//     { name: 'Horace Slughorn', type: 'staff' },
//     { name: 'Dolores Umbridge', type: 'staff' },
//     { name: 'Lucius Malfoy', type: 'none' },
//     { name: 'Gregory Goyle', type: 'student' }
//   ],
//   // ...
//   noHouse: [
//     { name: 'Kingsley Shacklebolt', type: 'none' },
//     // ...
//   ]
// ]