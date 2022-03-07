let table = [4,5,6];

let a = table[0];
let b = table[1];
let c = table[2];
if (a+b>c && a+c>b && c+b>a){
    console.log("Można zbudowac trojkat");
}
else{
    console.log("Nie mozna zbudowac trojakta");
}