//let stringus = "lampa ma kota";
(function (stringus) {
    const arr = [... stringus];
    let maxstring = ""
    let actualstring = ""
    // console.log(arr)
    arr.forEach(k => {
    console.log(k, maxstring, actualstring)
    if (k !== ' ') {
        actualstring+=k
    } else {
        if (maxstring.length < actualstring.length) {
            maxstring=actualstring
        }
        actualstring=''
    }
    
    });
    console.log(maxstring)
    return maxstring;       
    
 })("Lampa ma ktosas"); // PROBLEM POLEGA NA TYM ZE NIE UWZGLEDNIA LAST LITERKI 