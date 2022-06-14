const func1 = () => {
    return new Promise((resolve, reject) => {
        resolve(1)
    })
}

const func2 = () => {
    return new Promise((resolve, reject) => {
        resolve(2)
    })
}

const func3 = () => {
    return new Promise((resolve, reject) => {
        resolve(3)
    })
}

const cb = (x) => {
    console.log(x)
}

const funTab1 = [func1(), func2()]
const funTab2 = [func1(), func3()]





const grupuj = (funTab1, funTab2, cb) => {
    Promise.all([Promise.all(funTab1), Promise.all(funTab2)])
    .then((res) => {
    const wynik = []
     for (i=0; i<res[0].length;i++) {
        wynik.push([res[0][i], res[1][i]])
     }
    return wynik
    }).then(x=> cb(x))
};

grupuj(funTab1,funTab2, cb)
