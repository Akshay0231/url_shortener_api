const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();
dotenv.config();

mongodb.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).
    then(console.log("Connected to MongoDB")).
    catch((err) => {
        throw err
    });


// MIDDLEWARES
app.use(express.json());


// routes



// PORT
const PORT = process.env.PORT || 8080

// START BACKEND SERVER
app.listen(PORT, () => {
    console.log(`Backend Server Started on ${PORT}`);
})