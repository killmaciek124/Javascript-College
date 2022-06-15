const soonerThan = (funTab, maxtime) => {
	return new Promise((resolve, reject) => {
		const results = [];

		let timeout = setTimeout(() => {
			timeout = null;
			resolve(results);
		}, maxtime);

		const funThenCb = (result) => {
			if (timeout === null) return;
			results.push(result);
			if (results.length !== funTab.length) return;
			clearTimeout(timeout);
			resolve(results);
		};

		const funCatchCb = (err) => {
			if (timeout === null) return;
			clearTimeout(timeout);
			reject(err);
		};

		funTab.forEach((fun) => (
			fun().then(funThenCb).catch(funCatchCb)
		));
	});
};


///===============================
// zwraca wyniki wczeszniej niz milisekund iles 

const dummyFunctions = [
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  ]
  
  const soonerThen = (funTab, maxtime) => {
    let timeBefore = new Date().getTime();
    let counter = 0;
    let results = [];
    dummyFunctions.forEach(fun => {
      fun.then(result => {
        let timePassed = new Date().getTime() - timeBefore;
        counter++;
        if(timePassed <= maxtime){
          results.push(result);
        }
        if(counter === funTab.length){
          console.log(results);
        }
      })
    })
  }
  
  // soonerThen(dummyFunctions,2500);