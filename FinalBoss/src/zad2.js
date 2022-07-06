
const axios = require('axios');


class AccountService {
    constructor() {
      this.authenticated = false;
      this.idUser = Math.floor(Math.random() * 10);
      this.user = null;
    }
  
    // Pobieranie liczby sekund, po jakiej użytkwwnik powinien zostać zalogowany
    getRandomLoginTime() {
      return (Math.floor(Math.random() * 10) % 5) + 5;
    }

    isAuthorizated() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                // console.log(this.authenticated)
                res(this.authenticated)
            }, 1000)
        })
       
    }

    checkIsUserLogin() {
        const interval = setInterval(() => {
            this.isAuthorizated().then(x=> {
                if(x === false) {
                    console.log("Uzytkownik niezalogowany!")
                } else {
                    console.log("Uzytkownik zalogowany")
                    this.startSession()
                    // console.log(x)
                    clearInterval(interval)
                    this.getUserDetails()
                    .then(x=> {
                        const name1 = x.data.name
                        console.log(" Uzytkownik zalogowany jako: "+x.data.name+"")
                        this.getData()
                        .then(x=> {
                            console.log("Pobrano wpisy i komentarze użytkownika: "+name1+"")
                            // console.log(x)
                        })
                    })
                }
            })
        }, 1000)
    }

    loginUser() {
        setTimeout(() => {
            this.authenticated = true
        },this.getRandomLoginTime())
    }

    getRandomLoginTime() {
        return this.idUser*1000
    }

    getUserDetails() {
        return axios.get("https://jsonplaceholder.typicode.com/users/"+this.idUser+"")
    }

    getData() {
        return Promise.all([axios.get("https://jsonplaceholder.typicode.com/posts"), axios.get("https://jsonplaceholder.typicode.com/posts/{idPost}/comments")])
         
    }

    start() {
        this.loginUser()    
        this.checkIsUserLogin()
    }

    startSession() {
        const rand = Math.floor(Math.random() * 20);
        let rand2 = 0
        setTimeout(() => {
            rand2++
            if (rand === rand2) {
                console.log("Sesja się zakończyła, użytkownik został wylogowany")
                this.authenticated = false;
            }
        },1000)
    }
  }

const acc1 = new AccountService()
acc1.start()
// acc1.loginUser()
// acc1.isAuthorizated()   

