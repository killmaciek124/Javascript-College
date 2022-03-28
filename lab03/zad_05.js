function unequal (a,b,c) {  // !== strict inequality operator zawsze patrzy ze znaki o różnych typach są różne
    if   (a!==b && b !==c && c !== a) { // dla != inequality operator "1" i 1 to to samo 
        return true
    } else {
        return false
    }

}
console.log("1" == 1) // TRUE
console.log("1" === 1) // FALSE
console.log(unequal(1,2,3))