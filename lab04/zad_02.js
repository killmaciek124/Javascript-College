//let stringus = "lampa ma kota";
(function (stringus) {
    const arr = [... stringus, " "]; // spacja jest po to żeby warunek działał że jak trafi na spacje to porównuje najwieksze slowo (CHEAT)
    let maxstring = ""
    let actualstring = ""
    console.log("arr:",arr)
    arr.forEach(k => {
    // console.log(k, maxstring, actualstring)
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
    
 })("Lampa ma ktasdsffasfaasf"); 