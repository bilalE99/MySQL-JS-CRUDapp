const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


let instance = null;

const connection = mysql.createConnection({
    /*
    host: process.env.HOST.toString,
    user: process.env.USER,
    password: process.env.PASSW0RD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    */
    host: 'localhost',
    user: 'crud_app_user',
    password: 'test123',
    database: 'crud_app',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
})

class Dbservice {
    static getDbServiceInstance(){
        // if instance is not null means object already created
        // therefore create new instance of dbservice
        return instance ? instance : new Dbservice();
    }
}

module.exports = Dbservice;