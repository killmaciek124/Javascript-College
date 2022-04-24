const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4] },
    { key: 0, x: [1], y: [] }
    
]
const sum = arr.reduce(function(previousValue, currentValue) {
  
    return currentValue.x.length + currentValue.y.length + previousValue.x.length + previousValue.y.length
},);

console.log(sum);
