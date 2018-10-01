const mongod = require('mongodb-memory-server');
const MongoMemoryServer = mongod.MongoMemoryServer;
// https://stackoverflow.com/questions/13607732/in-memory-mongodb-for-test 

const mongoConn = new MongoMemoryServer({
    instance: {
        port: 6666,
        dbPath: './database'
    }, 
    debug: true
});

console.log(mongoConn.isRunning);
console.log(mongoConn.opts)

mongoConn.start();


module.exports = {
    mongoURI: 'fake'
}

