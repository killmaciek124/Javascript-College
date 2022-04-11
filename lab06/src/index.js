const games = require('./games.js').games;

const status1 = 'Completed';
switch(status1) {
    case 'Completed':
        runFunc();
 
    case 'Running': 
        runFunc2();
}

function runFunc() {
    console.log("edycja");
}
function runFunc2() {
    console.log("hepeni1111");
}


const links = games.reduce(function(akumulator, object) {
    if  (object.imageUrl !== '' && akumulator.length <4) {
        akumulator.push(object.imageUrl);
    }
    return akumulator;
    
  },[]);

  console.log(links);

