const mysql = require('mysql');
//require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '', 
    database: 'countriesdb'
    /* host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE */
});

/* connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected x fin!");
  }); */

module.exports = connection;