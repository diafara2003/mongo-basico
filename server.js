const express = require('express');
const db = require('./DataBase/Connection');

const app = express();

db();
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log("server started");
})

