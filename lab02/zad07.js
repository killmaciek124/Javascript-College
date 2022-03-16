const person1 = { 
    name: 'Agata', 
    age: 21 
  }

  const person2 = { 
    name: 'Tomasz', 
    age: 25 
  }

  const person3 = { 
    name: 'Alicja', 
    age: 31
  }

  const person4 = { 
    name: 'Jan', 
    age: 20 
  }

  var table = []
  table.push(person1, person2, person3, person4);
  console.log(table);

  let avg = 0 
  let sum = 0
  let licznik = 0 
  for (let i=0; i<table.length; i++) {
    sum+= table[i].age;
    licznik+=1;

  }

avg=sum/licznik;
console.log("Suma "+sum+" i średnia "+avg+" " );

// Zad 8 

let powyzej = [];
let ponizej = [];

for (let j=0; j<table.length; j++) {
    if (table[j].age > avg) {
        powyzej.push(table[j].age)

    } else if (table[j].age < avg) {
        ponizej.push(table[j].age)
    }

  }

console.log(powyzej, ponizej, "powyzej i ponizje")
