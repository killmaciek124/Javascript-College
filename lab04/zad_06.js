function recursiveNWD(a,b,licznik) {
    if (licznik === 0) {
        return false
    } else {
        if (a % licznik === 0 && b% licznik === 0) {
            return licznik
        } else {
            return recursiveNWD(a,b,licznik -1)
        }
    }
}
console.log(recursiveNWD(75,35,75))