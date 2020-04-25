var express = require('express');
var router = express.Router();
var db = require('../DATABASE');
const model = require("../Model/appModel.js");

router.get('/', model.list_all_products);


module.exports = router;
