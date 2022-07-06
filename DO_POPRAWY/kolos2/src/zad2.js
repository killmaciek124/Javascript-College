"use strict";

const f1 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n == 10) {
                resolve(5);
            } else {
                reject(10);
            }
        }, 1000);
    });
};
const f2 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n > 10) {
                resolve(n + 45);
            } else {
                reject(n * 2);
            }
        }, 1000);
    });
};
const f3 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n > 40) {
                reject(n - 15);
            } else {
                resolve(n + 10);
            }
        }, 1500);
    })
};

const callback = (n) => {
    console.log(n);
}

// SOLVED : 

const poKolei = (fun1, fun2, fun3, cb) => {
    const input = 10
    fun1(input)
    .then(x=> {
        fun2(x)
        .then(x=> {
            fun3(x)
            .then(x=> {
                cb(x)
            })
            .catch(x=> {
                cb(x)
            })
        })
        .catch(x=> {
            fun3(x)
            .then(x=> {
                cb(x)
            })
            .catch(x=> {
                cb(x)
            })
        })
    })
    .catch(x=> { // catch do fun1
        fun2(x)
        .then(x=> {
            fun3(x)
            .then(x=>{
                cb(x)
            })
            .catch(x=> {
                cb(x)
            })
        })
        .catch(x=> {
            fun3(x)
            .then(x=>{
                cb(x)
            })
            .catch(x=> {
                cb(x)
            })
        })
    })
  };

poKolei(f1, f2, f3, callback)