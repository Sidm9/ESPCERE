var mysql = require('mysql');
const dbConfig = require("../config/db.Config.js");

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
  });

connection.connect(error => {
    if(error) throw error;
    console.log("SuccessFull DB");
});

module.exports = connection;