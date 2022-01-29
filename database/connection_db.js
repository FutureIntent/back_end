const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

    //DB CONNECTION
    var db_conn = mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });

module.exports = db_conn;