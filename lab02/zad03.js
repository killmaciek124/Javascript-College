const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9];
let array = []
for (let i=0; i<testArray.length;i++) {
    if (typeof testArray[i]?.length === "number"){
        for (let j=0; j<testArray[i].length;j++){
            array.push(testArray[i][j]);
        }
    } else {
        array.push(testArray[i]);
    }
}   

console.log(array)