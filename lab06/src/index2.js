const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4] },
    { key: 0, x: [1], y: [] }
]
const sum = arr.reduce(function(akumulator, object) {


    return akumulator + object.x.length + object.y.length; // nie dziala dobrze
},[]);

console.log(sum);