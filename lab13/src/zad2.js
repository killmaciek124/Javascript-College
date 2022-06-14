
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
  
   const func3 = () => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
      resolve(3);
    },3000)
  
   });
  
  }

const cb = (x) => {
    console.log(x)
}
  
const funTab1 = [func1(),func3(),func1()];
const funTab2 = [func2(),func1(),func2()];

const grupuj = (funTab1, funTab2, cb) => {
    Promise.all([Promise.all(funTab1),Promise.all(funTab2)])
    .then(x=> {
        const res = []
        for (let i =0; i<x[0].length;i++) {
            res.push([x[0][i], x[1][i]])
        }
        return res
    })
    .then(x=> cb(x))
    
};
grupuj(funTab1,funTab2, cb)
