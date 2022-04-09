function funkcyja(x) {
    x();
}
function funkcyjakolejna() {
    console.log("DZIALA!");
}

funkcyja(funkcyjakolejna);