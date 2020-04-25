'user strict';
const sql = require('../DATABASE.js');

const ProductModel = function(Product){
    this.Name = Product.Name;
    this.Price = Product.Price;
    this.Description = Product.Description;
};

ProductModel.getProduct = result => {    
        sql.query("SELECT * from Product", function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null, res);
                }
            });           
};  

module.exports= ProductModel;