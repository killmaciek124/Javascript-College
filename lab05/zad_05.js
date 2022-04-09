'use strict';

const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

  // a )
function a(list) {
    var sum = 0;
    for (let i = 0; i < list.length; i++){
        sum+=((list[i].netto)*1.23);
    }
    return sum
}

// console.log(a(wishlist));

// b )
  const b = wishlist.reduce(function(akumulator, object) {
    akumulator.push(object.netto);
    return akumulator
  },[]);

//   console.log(b);

/// c) 
function c(list,func) { 
    const finalresult = list.reduce(function(akumulator, object) {
        akumulator = concatanate(list);
        return akumulator
    }, []);
}
function concatanate(list) {
    var newlist = []
    for (let i = 0; i<list.length;i++) {
        newlist.push(""+list[i].name+" : "+list[i].netto+"")
    }
    return newlist
}

// console.log(concatanate(wishlist));

/// d)


    const finalresult = wishlist.map(function(x) {
        // console.log(x);
        return ""+x.name+" : "+x.netto+"" 
    });
    // console.log(finalresult);

function concatanate(list) {
    var newlist = []
    for (let i = 0; i<list.length;i++) {
        newlist.push(""+list[i].name+" : "+list[i].netto+"")
    }
    return newlist
}

const result = wishlist.reduce(function(akumulator, object) {
    if (object.netto<500) {
        akumulator.push(object.name);
    }
    
    return akumulator
}, []);

console.log(result);

