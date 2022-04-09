// for (
    // arr.forEach(el =>4
    //console.log(el))
    // )

function func1() {
    let x = 5;
    const innerfunc = (a=4) =>  x + a;
    return innerfunc(x)
}


console.log(func1())