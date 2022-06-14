console.log("Tesrt");

const func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Blad")
        }, 2000);
    })
}

func1().then((res) => { // then powodzenie, reject niepowodzenie
    console.log(res);

}).catch((err) => {
    console.log(err)
})

Promise.all([func1(),func2()]).then((data) => {
    console.log(data);
}) // zwraca tablice z rezultatami funkcji 