const {connectToMongoDB, getDB} = require("../../dbConnection/connectionFile");
const express = require("express");
const app = express();

const defaultDoor = 3000;

connectToMongoDB().catch((error) => {
    console.log("Connection failed: ", error);
    process.exit(1);
})

app.get('/parents', async (req, res) => {
    try {
        const db = getDB();
        const document = await db.collection("parents").find().toArray();
        res.status(200).json(document);
    } catch (error) {
        console.log("Error when tried to fetch the documents");
        res.status(500).json({error: "Error when tried to fetch the documents"})
    }
})

app.listen(defaultDoor, () =>{
    console.log(`Listing on port ${defaultDoor}`)
})