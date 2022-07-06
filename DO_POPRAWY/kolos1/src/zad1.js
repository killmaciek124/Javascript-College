const imported = require('./series.js');
let imported2 = JSON.parse(JSON.stringify(imported));
let imported3 = JSON.parse(JSON.stringify(imported)); // DEEP COPY OF AN OBJECT !!! 

// MINISERIES : 

const miniseries = imported2.series // lista obiektow
    .filter(x=> x.seasons === 1)
    .map(x=> {
        x['Year'] = x['startYear'] // JAK ZMIENIC NAZWY KLUCZY W DICT !!!  !!! 
        delete x['startYear']

        var {name, Year, type} = x // DESTRUKTURYZACJA 
        var res = {name, Year, type}
        return res
    })
    .sort((a, b) => a.name.localeCompare(b.name)); /* <=== WYTŁUMACZENIE TEJ LINII KODU : 
    Sortujemy tablicę obiektów względem klucza 'name' 

    */

// console.log(miniseries)

// SERIES : 

const finalSeries = [[], [], []] //TRZYELEMENTOWA TABLICA TABLIC CZYLI FINAL RESULT ! 
const series1 = imported3.series // jak posortowac liste slownikow  => https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
    .map(x=> {
        if (x.endYear === null) {
            x['endYear'] =  -1
        }
        return x
    })
    .sort((a, b) => {
        return a.startYear - b.startYear; // LINIA (28,29,30) POKAZUJE JAK SORTOWAC LISTE SLOWNIKOW BY WARTOSC (WARTOSC KLUCZA)
    })
    .sort((a, b) => {
        return a.endYear - b.endYear
    })
    .sort((a, b) => {
        if (a.endYear !== -1 && b.endYear !== -1) {
            return a.startYear - b.startYear
        }
    })
    // zamiana type: filmu z tablicy na string 
    .map(x=> {
        let newType = ""
        for(let i=0; i<x.type.length; i++) {
            newType+= x.type[i]
            if (i + 1  !== x.type.length){ // zeby nie dac przecinka na ostatni element ! 
                newType+= ", "
            }
        }
        x.type = newType
        return x 
    })
    .map(x=> {
        if (x.endYear === -1) {
            delete x.endYear
        }
        return x 
    })
    .map(x=> {
        if (x.startYear < 2010) {
            finalSeries[0].push(x)
        } else if (x.startYear >= 2010 && x.startYear < 2020) {
            finalSeries[1].push(x)
        } else {
            finalSeries[2].push(x)
        }
    })

console.log(finalSeries)

// console.log(series1)