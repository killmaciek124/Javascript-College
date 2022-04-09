const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
let newarray = [];

for (let i=0; i<array.length; i++) {
    if (typeof array[i] === "number") {
        newarray.push(array[i]);
    }  
   
}

for (let i=0; i<array.length; i++) {
    if (typeof array[i] !== "number") {
        newarray.push(array[i]);
    }  
   
}
console.log(newarray);


