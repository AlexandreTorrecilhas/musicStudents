const dotenv = require('dotenv');
const dotenvPath = '../.env.test';
dotenv.config({path: dotenvPath});

const {MongoClient} = require('mongodb');

const uri = process.env.CONNECTIONURI;

const client = new MongoClient(uri);

async function connectToMongoDB(){
    try {
        client.connect();
        console.log("Connected")
    } catch (error) {
        console.log("Failed: ", error)
        throw error
    }
}

module.exports = {
    connectToMongoDB,
    getDB: () => client.db()
}