const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swoldiers = require('./swoldierApiRoutes');
var cors = require('cors');
const app = express();


app.use(bodyParser.json());
app.use(cors());
const db = require('./keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected! Yay!'))
    .catch(err => console.log(err));

//use routes

app.use('/api/swoldiers', swoldiers);


app.listen(5000, function(){
    console.log("Server Listening on Port 5000");
});


