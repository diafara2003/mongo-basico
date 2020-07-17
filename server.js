const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./DataBase/Connection');
const app = express();
const port = process.env.Port || 3000;


app.use(cors());
app.use(bodyParser.json());

db();


app.get('/',(req,res)=>{
    res.send("we are on home")
});

app.use('/posts',(req,res)=>{
    res.send("we are on POST")
});



const postRoute=require('./API/Post');
app.use('/api/post',postRoute);


app.listen(port, () => {
    console.log("server started");
})

//https://www.youtube.com/watch?v=vjf774RKrLc&t=1528s