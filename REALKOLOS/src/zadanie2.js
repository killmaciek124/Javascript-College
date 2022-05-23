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
// -> [ [ 'name', 'Przyjaciele edytowany' ], [ 'endYear', 2010 ] ]

function detectChanges(orginal, modified) {
    changes = []
    var keys = Object.keys(orginal); //get keys from object as an array
    keys.forEach(function(key) { //loop through keys array
    console.log(key, key == myString)
});
      
}
detectChanges(object1,object2)
console.log(object2.i)