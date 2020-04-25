const sql = require("./db.js");

// constructor
const ProductModel = function (Product) {
    this.id = Product.id;
    this.name = Product.name;
    this.description = Product.description;
    this.Image = Product.Image;
    this.Count = Product.Count;
};


ProductModel.getAll = result => {
    sql.query("SELECT * FROM product", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("product: ", res);
        result(null, res);
    });
};


ProductModel.create = result => {
    sql.query("INSERT into product SET ? ", newProduct, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, NULL);
            return; 
        }
        console.log("ADDED" , {id: res.id, ...newProduct});
        result(null , {id: res.id, ...newProduct});
    });
};

module.exports = ProductModel;