const func1 = () => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
      resolve(1);
    },1000)
   });
  }
  
const func2 = () => {
return new Promise( (resolve,reject) => {
    setTimeout(() => {
    resolve(2);
},2000)
  
});
}

const func3 = (x) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
        resolve(x*2);
    },4000)
      
    });
}

const funTab1 = [func1(),func2()];


const connect = (funTab, fun) => {
    Promise.all(funTab)
    .then(x=> {
        async () => {
            x.map(y=> [y, fun(y)])
        }
        console.log(x)
    })
    // .then(x=> console.log(x))

};

connect(funTab1,func3)