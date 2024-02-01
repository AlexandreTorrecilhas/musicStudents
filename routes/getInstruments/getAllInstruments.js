const {connectToMongoDB,getDB} = require('../../dbConnection/connectionFile');
const express = require('express');
const app = express();

connectToMongoDB().catch((error) => {
    console.log("Connection failed: ", error);
    process.exit(1)
});

app.get('/instruments', async (req, ))