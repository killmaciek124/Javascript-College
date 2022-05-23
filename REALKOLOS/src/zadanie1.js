const realseries = require('./series.js');
const series = realseries.series
// console.log(series)
const miniseries = series.filter((serie) => {
    return serie.seasons === 1
})

const seriesWithout = miniseries.reduce((akum,current) => {
    current.year=current.startYear
    delete current["id"]
    delete current["startYear"]
    delete current["endYear"]
    delete current["seasons"]

},{})
// console.log(miniseries)

// ======== SERIES :
const newRealseries = require('./series.js');
const newSeries = newRealseries.series
const series2 =  [[],[],[]]
const res = newSeries.reduce((akum,current) => {
    if (current.endYear !== null) {
        if (current.startYear<2010) {
            series2[0].push(current)
        } else if (current.startYear >= 2010 && current.startYear < 2020) {
            series2[1].push(current)
        } else {
            series2[2].push(current)
        }

    } 
    

},{})
console.log(series2)