const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
const getNum = (cb) => {
    setTimeout(() => {
        cb(getRand());
    }, getRand() * 5);
};    

const asyncSort = (dim) => {
    const table = []
    for(let i =0; i<dim;i++) {
        const x = getNum((x) => {
            table.push(x)
            if (table.length === dim) {
                console.log(table.sort().reverse())
            }

        })
    }
};

asyncSort(4)