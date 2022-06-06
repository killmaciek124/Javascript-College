function foo(min,max){
    let count = min
    // console.log(count)
    return () => count<max+1 ? count++ : undefined
}
//dlaczego dziala i jak dziala
const a = foo(1,3)
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())