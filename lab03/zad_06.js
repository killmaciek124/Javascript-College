function weird(list) {
    for (let i=0;i<list.length;i++) {
        console.log("rząd "+i+"")
        for (let j=0;j<list[i].length;j++) {
            console.log(""+list[i][j]+"")
        }
    }

}


weird([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])