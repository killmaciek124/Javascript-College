function numbers(x) {
    if (x <=1) {
        return x 
    }
    return x + numbers(x-1)
}

console.log(numbers(4))