const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('./config/mongoose');

app.use(express.json());

// connecting to routes
app.use('/', require('./routes'));

app.listen(port, (err)=> {
    if (err) {
        console.log(`Error in running the server ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
})