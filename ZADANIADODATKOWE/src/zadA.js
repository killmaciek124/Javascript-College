// **Zadanie 2.** 

// Napisz funkcję:

// `const poKolei = (funTab, cb) => (n) => { ... };`                    
                        

// taką, że:
// 1. pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu `n`, z którego korzysta funkcja poKolei
// 2. funkcja poKolei powinna zapewnić, że następna funkcja np. `fun2` wykona się zawsze po poprzedniej np. `fun1`, a wyniki wygenerowane przez `fun1` zostaną przekazane do `fun2`.
// 3. trzecim argumentem jest „callback” `cb`, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy

const func1 = (x) => {
    return new Promise((resolve, reject) => {
        resolve("WYKONANIE FUNKCJI "+x+1+"")
    })
}

const func2 = (x) => {
    return new Promise((resolve, reject) => {
        resolve("WYKONANIE FUNKCJI "+x+1+"")
    })
}

const cb = (x) => {console.log(x)}
const funTab = [func1(), func2()]
const poKolei = (funTab, cb) => (n) => {
    for (x=0; x<funTab.length; x++) {
        funTab[x](n).then(x=> console.log(x))
    }
};

poKolei(funTab,cb())(4)