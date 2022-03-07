let table = [1,2,3,-4,5,6,8,10,-11,5,151,-132];
console.log(table);

for (i=0; i < table.length; i++){
    console.log(table[i])
}
table.sort(function(a, b){return a-b});
console.log(table);
console.log("Najmniejsza wartość :", table[0]);
let len = table.length;
console.log("Największa wartość :", table[len-1]);
table.reverse();
console.log(table);