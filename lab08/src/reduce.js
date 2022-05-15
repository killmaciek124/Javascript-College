const arr = [
    { key: 0, x: [4, 5, [6]], y: [1, 2, [3, [4]]] },
    { key: 0, x: [1], y: [1] },
]

const sum = arr.reduce(function(previousValue, currentValue) {
    return currentValue.x.flat().length + currentValue.y.flat().length + previousValue.x.flat().length + previousValue.y.flat().length
},);

console.log(sum);
