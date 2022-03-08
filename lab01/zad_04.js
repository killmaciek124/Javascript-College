let table1 = [4,5,6];

let x = table1[0];
let b = table1[1];
let c = table1[2];
if (x+b>c && x+c>b && c+b>x){
    console.log("Można zbudowac trojkat");
}
else{
    console.log("Nie mozna zbudowac trojakta");
}