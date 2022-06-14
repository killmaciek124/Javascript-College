const foo = (x,y) => {
    licznik =0 
    return  inter= setInterval(() => {
        if (licznik < x) {
            licznik+=1 
            console.log(licznik)
        } else {
            clearInterval(inter)
        }
    },y)
}

foo(5,1000)