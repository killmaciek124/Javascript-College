let licznik = 0;
let foo;
function startCounter() {
    foo = setInterval(() => {console.log(licznik++)}, 1000)
    
}

function stopCounter() {
    clearTimeout(foo)
   
}

function clearCounter() {
    licznik=0
}

// zad 4 :
function counter(x,y) {
    let startvalue = 1;
    return setInterval(() => {if (startvalue < x){
        console.log(startvalue)
        startvalue++
    }}, y)

}
counter(5, 1000)