const items = [
    {name: "Bike", price: 500},
    {name: "Eat", price: 50},
    {name: "owoc", price: 500},
    {name: "warzywo", price: 250},
    {name: "dupa", price: 100},
    {name: "Album", price: 1000}
]

// FILTER 
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log("filter:",filteredItems)
// MAP 
const itemsNames = items.map((item) => {
    return item.price
})
console.log("MAP:",itemsNames)
// FIND
const foundItem = items.find((item) => {
    return item.name === 'Album'
})
console.log("FIND: ",foundItem)
// FOREACH
items.forEach((item) => {
    console.log("foreach",item.price)
})
// SOME
const hasExpensiveItems = items.some((item) => {
    return item.price <=100
})
console.log("some",hasExpensiveItems)
//EVERY
const hasExpensiveItemsAll = items.every((item) => {
    return item.price <=100
})
console.log("every",hasExpensiveItemsAll)
// REDUCE 
const total = items.reduce((akum,item) => {
    return item.price + akum
},0)
console.log("reduce",total)
// INCLUDES 
const itemsTwo = [1,2,3,4,5]
const includesTwo = items.includes(2)
console.log("includes: ",includesTwo)