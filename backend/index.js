//.env
const dotenv = require('dotenv');
const dotenvPath = '././.env.test';
dotenv.config({path: dotenvPath})

const express = require('express');
const app = express();
const routes = require('./routes/routes')

//Routes
app.use('/index', ...routes);

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})