const {connectToMongoDB, getDB} = require ('../../dbConnection/connectionFile.js');
const express = require('express');
const app = express();

connectToMongoDB().catch((error) =>{
    console.log("Connection falied: ", error)
    process.exit(1);
})

app.get('/instrumentFamily', async (req, res) => {
    try {
        const db = getDB();
        const document = await db.collection("instrumentFamily").find().toArray();
        res.status(200).json(document)
    } catch (error) {
        console.log("Error when trying to fetch the documents", error);
        res.status(500).json({error: "Could fetch the documents"});
    }
});

app.listen(3000, () => {
    console.log("Running on port 3000")
})