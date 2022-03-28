function check (table) {
    const odp = {}
    for (let i = 0; i < table.length; i++) {
        odp[table[i]] = 0;
        for (let j = 0; j < table.length; j++) {
            if (table[i] === table[j]) {
                odp[table[i]] +=1
            }
        } 
    }
    return odp

}

console.log(check(['js', 'react', 'js', 'angular', 'angular', 'js']))