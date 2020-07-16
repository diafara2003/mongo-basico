const mongoose = require('mongoose');

const URI = "mongodb+srv://dbadmin:andres123@cluster0.saau5.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {

    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("db connected");
};


module.exports = connectDB;

//https://www.youtube.com/watch?v=Qn0SOL8vK8w