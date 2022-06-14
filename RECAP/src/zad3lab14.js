const cb = () => {
    console.log("CALLBACK!!!!!!")
}


const promise1  = () => {
    // console.log("stattyy")
    return new Promise((resolve,reject) => {
     resolve("promise1 resolved")
 })
 }
   const promise2 = () => {
    // console.log("staRT")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise2 resolved")
        },3000)
 })
 }
   const promise3 = () => {
    // console.log("start") // DOWOD ZE WSZYSTKIE PROMISY WYKONUJA SIE JEDNOCZESNIE
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise3 resolved")
    },2000)
 })
 }

const promisesTab = [promise1(),promise2(),promise3() ]

const razem = (promisesTab, cb)  => {
    let licznik = 0 
    for (i=0; i<promisesTab.length; i++) {
        promisesTab[i].then(x=> {
            licznik++
            console.log(x)
            if (licznik === promisesTab.length) {
                cb()
            }
        })
    }
}
    

razem(promisesTab,cb)