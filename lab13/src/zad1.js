func1 = (x, cb) => {
    setTimeout(() => {
        console.log("Wykonanie func1")
        cb(x+1)
    },3000)
}

func2 = (x, cb) => {
    setTimeout(() => {
        console.log("Wykonanie func2")
        cb(x+1)
    },1000)
}

callBack1 = (data) => {
    console.log("Wykonanie funkcji callBack1", data) 
}

 const poKolei = (fun1, fun2, cb) => { // POWTORZ PRZED KOLOKWIUM
    fun1(1, (data) => { // data to jest jakby przypisanie wyniku funkcji cb w func1
        console.log("Wykonanie funkcji 1: ", data)
        fun2(data, (data) => {
            console.log("Wykonanie funckji 2: ", data)
            cb(data)

        })
    })
};

poKolei(func1,func2,callBack1)