var cont = require('../Model/appModel.js');

exports.list_all_products = function(err , res) {
    cont.getProduct(function (err , cont) {
        console.log("Controller")
        if (err) 
            res.send(err);
            console.log('res' , cont)
        res.send(cont);
    });
};
