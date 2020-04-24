import db from '../DATABASE.js'
var express = require('express');
var router = express.Router();

/* GET users listing. */
var query = connection.query('SELECT * FROM PRODUCT', function (err, rows, fields) {
  if (err) throw err

  console.log(rows);
})


router.get('/', function(req, res, next) {
  res.send('respwefurce');
});
var query = connection.query('SELECT * FROM PRODUCT', function (err, rows, fields) {
  if (err) throw err

  console.log(rows);
})


module.exports = router;
