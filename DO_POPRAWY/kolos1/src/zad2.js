const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
};
  
const object2 = {
id: 2,
name: 'Przyjaciele edytowany',
startYear: 1994,
endYear: 2010,
type: ["Komedia"],
seasons: 10

};


// const object1 = {
//     value: {
//       field: "old value"
//     },
//     name: 'test'
//   }
//   const object2 = {
//     value: {
//       field: "new value"
//     },
//     name: 'test'
//     }
  

const detectChanges = (orginal, modified) => {
    const obj1 = []
    for (const [key, value] of Object.entries(orginal)) { // iteracja po kluczach i wartosciach OBIEKTU  (mozemy dac tylko key albo tylko value)
        obj1.push([key,value])
    }
    const obj2 = []
    for (const [key2, value2] of Object.entries(modified)) {
        obj2.push([key2, value2])
    }

    const newObj1 = obj1.map(x=> x.flat())
    const newObj2 = obj2.map(x=> x.flat())// SPLASZCZANIE TABLICY => np. array.flat(2) ustawiamy 2 jako glebokosc splaszczania !!!!!

    // PETLA DO POROWNAN KLUCZY :
    const result = [] 
    for (let i=0; i<newObj1.length; i++) {
        if (newObj1[i][1] !== newObj2[i][1]) {
            result.push(newObj2[i])
        }
    }

    return result
}

console.log(detectChanges(object1,object2))


// ważżne !!!! 
// (["dupa"] === ["dupa"]) // FALSE !!!!!!!!!! 
