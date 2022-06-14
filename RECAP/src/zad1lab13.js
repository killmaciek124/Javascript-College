const func1 = (x,cb) => {
    setTimeout(() => {
        console.log("wywolanie funkcji 1")
        cb(x+1)
    },2000)
}

const func2 = (x,cb) => {
    setTimeout(() => {
        console.log("wywolanie funkcji 2")
        cb(x+1)
    },3000)
}

const cb = (x) => {
    console.log(x)
}

const poKolei = (fun1, fun2, cb) => {
    fun1(1, (data) => {
        // console.log("wykonanie funkcji 1 chyba XD")
        fun2(data, (data) => {
            // console.log("wykonanie funkcji 2 chyba XD")
            cb(data)
        })
    })
};

poKolei(func1,func2, cb)