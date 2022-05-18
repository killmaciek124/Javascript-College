function checkExchange(list) {
    budget = {
        5: 0,
        10:0,
        20:0
    }
    budget[list[0]]+=1
    
   for (let i =1 ; i<list.length;i++) {
    if (list[i] === 5) {
        budget[list[i]]+=1
    } else if (list[i] === 10) {
        if (budget[5]>0) {
            budget[10]+=1
            budget[5]-=1
        } else {
            return false
        }
   } else if (list[i]=== 20) {
       if (budget[10]> 0 && budget[5]>0) {
           budget[20]+=1
           budget[10]-=1
           budget[5]-=1
       } else if (budget[5]>2) {
           budget[20]+=1
           budget[5]-=3
       } else {
           return false
       }
   } else {
       return false
   }
}
return true
}
console.log(checkExchange([5, 5, 5, 10, 20])) // true
console.log(checkExchange([5, 5, 10, 10, 20]))// false
console.log(checkExchange([10, 10])) // false
console.log(checkExchange([5, 5, 10])) //true 


