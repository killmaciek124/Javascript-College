class Log {
    constructor() {
        this.historia = []
    }
    write() {
        console.log("argumenty : "+arguments+"") // LICZBA ARGUMENTOW JAKAKOLWIEK !!!! < ==== = == = = =
        let returnFoo = ""
        for (let i =0; i< arguments.length; i++) {
            let foo = arguments[i].toString()
            returnFoo+=foo
        }
        console.log(returnFoo)
        this.historia.push(returnFoo)

        // for (let i = 0; i<arguments.length; i++) {
        //     const funkcja = funkcja1.toString().trim()
        // }
        // console.log(" XD "+nazwa+" | "+funkcja+"")
        // let foo = ""+nazwa+" | "+funkcja+""
        // // const result2 = foo.replace(/^\s+|\s+$/g, '');
        // // const newFoo = foo.trim()
        // this.historia.push(foo)
        // this.historia.map(x=> x.trim())
    }

    printHistory(num=0) {
        this.historia= this.historia.map(x=> x.replace(/[\r\n]/gm, ''))
        if (num === 0) {
            console.log(this.historia)
        }
        else if (num < 0 || num > this.historia.length) {
            console.log("WRONG INPUT")
        } else {
            let min = num[0]
            let max = num[1]
            let returnHistory = this.historia.filter(x=> this.historia.indexOf(x) >= min && this.historia.indexOf(x) <= max)
            console.log("HISTORIA ")
            console.log(returnHistory)
        }
    }

    clearHistory() {
        this.historia = []
    }
}


let newKomunikat =  new Log()
newKomunikat.write("test", () => {
    return "Komunikatens"
})

newKomunikat.write("test2", () => { 
    return "KomunikatensSSSS"
})

newKomunikat.printHistory([0,2])
newKomunikat.clearHistory()
console.log("pusto : ")
newKomunikat.printHistory()
