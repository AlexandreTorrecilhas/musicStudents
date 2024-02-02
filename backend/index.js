//.env
const dotenv = require('dotenv');
const dotenvPath = '././.env.test';
dotenv.config({path: dotenvPath})

const express = require('express');
const app = express();

//Importing the routes
const getAllStudents = require('./routes/getStudent/getAllStudents');
const getAllFamily = require('./routes/getFamily/getAllFamily');
const getAllInstruments = require("./routes/getInstruments/getAllInstruments")

//Routes
app.use('/index', getAllStudents, getAllFamily, getAllInstruments);

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})