const dotenv = require('dotenv');
const dotenvPath = "../../.env.test";
dotenv.config({path: dotenvPath})

const {connectToMongoDB, getDB} = require('../../dbConnection/connectionFile')
const express = require('express');
const router = express.Router();

connectToMongoDB().catch((error) => {
    console.log("Failed: ", error)
    process.exit(1)
})

router.get('/musicStudents', async (req,res) => {
    try {
        const db = getDB();
        const document = await db.collection("musicStudents").find().toArray();
        res.status(200).json(document)   
    } catch (error) {
        console.log("Failed: ", error);
        res.status(500).json({error: 'Could not fetch the listing'})
    }
})

module.exports = router;