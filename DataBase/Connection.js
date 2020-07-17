require('dotenv/config');

const mongoose = require('mongoose');
const connectDB = async () => {

    await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("db connected");
};


module.exports = connectDB;

//https://www.youtube.com/watch?v=Qn0SOL8vK8w