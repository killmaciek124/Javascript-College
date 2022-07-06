const axios = require('axios');

const tab1 = () => {
    // console.log("tab1 started")
    return axios.get(`https://jsonplaceholder.typicode.com/photos`)
}

const tab2 = () => {
    // console.log("tab2 started")
    return axios.post(`https://jsonplaceholder.typicode.com/posts`,  {
        title: 'Test',
        body: 'Lorem ipsum',
        userId: 2
      })
}

const tab3 = () => {
    // console.log("tab3 started")
    return axios.get(`https://jsonplaceholder.typicode.com/users/5`)
}

const tab4 = () => {
    // console.log("tab4 started")
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}

const tab5 = () => {
    // console.log("tab5 started")
    return axios.put(`https://jsonplaceholder.typicode.com/posts/50`, {
        id: 50,
        userId: 3,
        title: 'New title',
        body: 'New body'
      })
}

const funTab = [tab1,tab2,tab3,tab4,tab5]

const checkTime = (funTab) => {

    const result = []

    console.log("START")

    let timer = 0

    const interval = setInterval(() => {
        timer+=0.2
        console.log("Mineło sekund: " + timer)
    },200)
    //a
    funTab[0]()
    .then(x=> {
        funTab[1]()
        .then(x=> {
            funTab[2]()
            .then(x=> {
                funTab[3]()
                .then(x=> {
                    funTab[4]()
                    .then(x=> {
                        console.log("Zakończenie dzialania programu a) po "+timer+" sekundach")
                        result.push(timer) 

                        // WARUNEK NA WYLACZENIE INTERVALA : 

                        if (result.length === 2) {
                            clearInterval(interval) 
                            console.log("Wynik : "+result+"")
                        }
                    })
                })
            })
        })
    })

    //b

    const newFunTab = funTab.map(x=> x())
    Promise.all(newFunTab)
    .then(x=> {
        console.log("Zakonczenie dzialania programu b) po "+timer+" sekundach")
        result.push(timer)

        // WARUNEK NA ZAKONCZENIE INTERVALA !!!!:  

        if (result.length === 2) {
            clearInterval(interval) 
            console.log("Wynik : "+result+"")
        }
    })
};

checkTime(funTab)