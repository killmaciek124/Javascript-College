function getCounter(min,max) {
    return increment(min,max)
}

function increment(min,max) {
    if (min<max) {
        return min++
    }
}