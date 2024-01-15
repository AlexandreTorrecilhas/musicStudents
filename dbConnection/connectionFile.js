const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017/musicStudents';

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