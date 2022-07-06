const func1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("dzuala func3")
            resolve(1)
        },1000)
    })
   
}

const func2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("dzuala func3")
            resolve(2)
        },2000)
    })
   
}

const func3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("dzuala func3")
            resolve(3)
        },3000)
    })
   
}

const tab1 = [func1(), func2()]
const tab2 = [func3(), func1()]

const process = (wyn1, wyn2) => {
    res = []
    for (let i = 0;i<wyn1.length;i++) {
        const u = [wyn1[i], wyn2[i]]
        res.push(u)
    }
    return res
  };


const result = (funTab1, funTab2, func) => {
    // ============= dodanie zerr
    if(funTab1.length > funTab2.length) {
        licznik = funTab1.length-funTab2.length
        for (let i=0; i<licznik;i++) {
            funTab2.push(0)
        }
    } else if (funTab1.length < funTab2.length) {
        licznik = funTab2.length-funTab1.length
        for (let i=0; i<licznik;i++) {
            funTab1.push(0)
        }
    }
    // ======================
    Promise.all([Promise.all(funTab1),Promise.all(funTab2)]).then(x=> {return func(x[0], x[1])})
    .then(x=> console.log(x))       
  
    
    
};

result(tab1, tab2, process);
