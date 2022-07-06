const axios = require('axios');

const promise1 = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos")
}

const promise2 = () => {
    return axios.post("https://jsonplaceholder.typicode.com/posts",
    {
        title: 'Test',
        body: 'Lorem ipsum',
        userId: 2
      }
    )
}

const promise3 = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users/{5}")
}

const promise4 = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos")
}

const promise5 = () => {
    return axios.put("https://jsonplaceholder.typicode.com/posts/{60}",
    {
        id: 60,
        userId: 3,
        title: 'New title',
        body: 'New body'
      })
}

const funTab = [promise1(), promise2(), promise3(),promise4(), promise5()]

const checkTime = (funTab) => {
    //b
    let licznik = 0
    for(let i=0; i<funTab.length;i++) {
        funTab[i].then(x=> {
            licznik++
            if (licznik === funTab.length) {
                console.log("DONE")
            }
        })
    }
  };

checkTime(funTab)