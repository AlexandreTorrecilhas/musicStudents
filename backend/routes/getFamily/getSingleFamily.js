const { ObjectId } = require('mongodb');
const {connectToMongoDB, getDB} = require ('../../dbConnection/connectionFile.js');
const express = require('express');
const routes = express.Router();

connectToMongoDB().catch((error) =>{
    console.log("Error when attempted the connection", error);
    process.exit(1);
})

routes.get('/instrumentFamily/:id', async (req, res) => {
    try {
        const db = getDB();
        const document = await db.collection('instrumentFamily').findOne({_id: new ObjectId(req.params.id)})
        res.status(200).json(document)        
    } catch (error) {
        console.log("Error when tried to fetch the document", error);
        res.status(500).json({error: 'Error when tried to fetch the document'});
    }
})

module.exports = routes;