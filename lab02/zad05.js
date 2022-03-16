//4
const cat = { 
    name: 'Filemon', 
    age: 6 
  }
let x = ("Kot ma na imię %s i ma %d lat.", cat.name, cat.age);
//5 

cat.description = "Kot ma na imię "+cat.name+" i ma "+cat.age+" lat.";


//6

cat.breed="labradolrrr";
cat.colour="pink";
cat.description = "Kot ma na imię "+cat.name+" i ma "+cat.age+" lat. Jest to "+cat.breed+" i jest koloru "+cat.colour+"";
console.log(cat.description, cat);