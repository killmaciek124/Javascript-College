const func1 = () => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
      resolve(1);
    },1000)
   });
  }
  
const func2 = async () => {
return 2
}

const func4 = async () => {
    return 5
    }

const func3 = (x) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
        resolve(x*2);
    },1000)
      
    });
}

const funTab1 = [func1(),func2(),func4()];


const connect = (funTab, fun) => {
    const res =[]
    return Promise.all(funTab)
    .then(x=> {
        // console.log(x)
            const y =x.map(y=>  fun(y))
            return Promise.all([x,Promise.all(y)]).then(x=> {
                // const res =[]
                for (i=0; i<x[0].length;i++) {
                    res.push([x[0][i], x[1][i]])
                }
                return res
            })

    })
};

connect(funTab1,func3).then(x=> console.log(x))