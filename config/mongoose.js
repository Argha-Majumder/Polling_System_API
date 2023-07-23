const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connection successful"))
.catch((err)=> console.log(`Error in connecting to mongoDB : ${err}`));