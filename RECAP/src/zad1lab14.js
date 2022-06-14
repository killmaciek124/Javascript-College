const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
const getNum = (cb) => {
    setTimeout(() => {
        cb(getRand());
    }, getRand() * 5);
};

const asyncSort = (dim) => {
    const res = []
    for (let i =0;i<dim;i++) {
        getNum((x) => {
            res.push(x)
            if (dim === res.length) console.log(res.sort().reverse())
        })
    }
  };

asyncSort(5)