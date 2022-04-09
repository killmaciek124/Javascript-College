function palindrome(list) {
    for (let i = 0; i <= (list.length)/2-1; i++) {
        if (list[i] !== list[list.length-1-i]) {
            return false
        }
    }
    return true
}

console.log(palindrome([1,2,3,3,2,1]));