const axios = require('axios');

async function main() {
    const res = []
    for (let i=0; i<5; i++) {
        let rand = Math.floor(Math.random() * 100) // RANDOMOWY INTEGER OD 0 DO 100 
        const wpis = await axios.get("https://jsonplaceholder.typicode.com/posts/"+rand+"")
        .then(x=> {return x.data})
        const komentarze = await axios.get("https://jsonplaceholder.typicode.com/posts/"+rand+"/comments")
        .then(x=> {return x.data})
        komentarze.map(x=>{
            delete x['postId']
            delete x['id']
        })
        res.push({
            entry: {
                title: wpis.title,
                body: wpis.body
            },
            comments: komentarze
        })
        // console.log(komentarze)
        console.dir(res,{depth: null}) // zapamietaj xd PRINTUJE ZAGNIEZDZONE OBIEKTY CZY COS 
    
    }

}
main()

