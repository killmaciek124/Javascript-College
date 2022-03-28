function isPositiveEven(number) {
if (number > 0) {
    if (number % 2 == 0) {
        console.log("Jest parzysta i wieksza od zera")
    } else {
        console.log("Jest nieparzysta i wieksza od zera")
    }
} else if (number < 0) {
    if (number % 2 == 0) {
        console.log("Jest parzysta i mniejsza od zera")
    } else {
        console.log("Jest nieparzysta i mniejsza od zera")
    }
} else if (number == 0) {
    console.log("Liczba rowna 0 ")
}
}

isPositiveEven(0);