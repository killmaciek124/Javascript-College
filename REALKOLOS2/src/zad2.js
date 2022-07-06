const func1 = (x,cb) => {
    return new Promise((resolve,reject) => {
        resolve(x)
    })
   
}

const func2 = (x, cb) => {
    return new Promise((resolve,reject) => {
        resolve(x)
    })
   
}

const func3 = (x,cb) => {
    return new Promise((resolve,reject) => {
        resolve(x)
    })
   
}

const cb = (x,cb) => { 
    console.log(x)
}




const poKolei = (fun1, fun2, fun3, cb) => { // TO DO ! 
    fun1(5).then(x=> {
        fun2(x).then(x=> {
            fun3(x).then(x=> {
                cb(x)
                console.log("dziala")
            })
        })
    })
};

poKolei(func1, func2, func3, cb)