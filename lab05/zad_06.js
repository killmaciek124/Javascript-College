let wishlist = [1,2,3,4];

function find(list,x) {
    for (let i = 0; i <= list.length; i++) {
        if (list[i] === x) {
            return list[i]
        }
    }
    return undefined
}

console.log(find(wishlist,7));