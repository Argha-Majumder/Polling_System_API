const mongoose = require('mongoose');
require('dotenv').config();

// connecting database url e.g. mongodb+srv://your_name:your_password@cluster0.h7n86ah.mongodb.net/database_collection_name?retryWrites=true&w=majority
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connection successful"))
.catch((err)=> console.log(`Error in connecting to mongoDB : ${err}`));