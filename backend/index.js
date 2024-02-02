//.env
const dotenv = require('dotenv');
const dotenvPath = '././.env.test';
dotenv.config({path: dotenvPath})

const express = require('express');
const app = express();

const getAllStudents = require('./routes/getStudent/getAllStudents');

app.use('/index', getAllStudents)

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})