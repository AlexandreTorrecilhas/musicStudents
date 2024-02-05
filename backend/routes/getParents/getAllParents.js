const {connectToMongoDB, getDB} = require("../../dbConnection/connectionFile");
const express = require("express");
const routes = express.Router();

connectToMongoDB().catch((error) => {
    console.log("Connection failed: ", error);
    process.exit(1);
})

routes.get('/parents', async (req, res) => {
    try {
        const db = getDB();
        const document = await db.collection("parents").find().toArray();
        res.status(200).json(document);
    } catch (error) {
        console.log("Error when tried to fetch the documents");
        res.status(500).json({error: "Error when tried to fetch the documents"})
    }
})

module.exports = routes;