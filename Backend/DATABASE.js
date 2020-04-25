var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ESPCERE'
})

connection.connect()

connection.query("SELECT * from Product", function (err, res) {

  if (err) {
    console.log("error: ", err);
    // res(err, null);
  }
  else {
    console.log(res);
    // res(null, res);
  }
});

module.exports = connection;
