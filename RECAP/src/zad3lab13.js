const axios = require('axios');

const res = []

for (i=0; i<5;i++) { // mozna tez promise ALL
    let rand = Math.floor(Math.random() * 100) // RANDOMOWY INTEGER OD 0 DO 100 
    const post = axios.get("https://jsonplaceholder.typicode.com/posts/"+rand+"")
    .then(x=> {return x.data})
    .then(x=> {
    const komentarze = axios.get("https://jsonplaceholder.typicode.com/posts/"+rand+"/comments")
    .then(x=> x.data)
    .then(x=> {
        x.map(y=> {
            delete y["postId"]
            delete y["id"]
        })
        return x       
    })
    .then(x=> {
        res.push({
            "entry": {
                "title": x.title,
                "body": x.body
            }
            
        })
        res["komentarze"] = x
    })
    .then(x=> console.log(res))

    })
    


    

}

// rozwiazanie szymona : 
'use strict';

import axios from "axios";

const rng_id = [];
for (let i = 0; i < 5; i++){
    rng_id.push(Math.floor(Math.random() * 100));
}

const posts = [];

for ( let i in rng_id){
    
    Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${rng_id[i]}`), 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${rng_id[i]}/comments`)])
    .then(res => {
        const [post, comments] = res;
        const obj = {};
        obj['entry'] = {
            "title": post.data.title,
            "body": post.data.body
        };
        obj['comments'] = [];
        for(let i in comments.data){
            const com = {
                "name": comments.data[i].name,
                "email": comments.data[i].email,
                "body": comments.data[i].body
            }
            obj['comments'].push(com);
        } 
        posts.push(obj); 

        if (posts.length === rng_id.length){
            console.dir(posts, { depth:null });
        }
    })
}
