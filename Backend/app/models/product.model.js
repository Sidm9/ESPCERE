const sql = require("./db.js");

// constructor
const ProductModel = function (Product) {
    // this.id = Product.id;
    this.name = Product.name;
    this.price = Product.price,
        this.description = Product.description;
    this.image = Product.image;
    this.count = Product.count;
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


ProductModel.create = (newProduct, result) => {
    sql.query("INSERT into product SET ? ", newProduct, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, NULL);
            return;
        }
        console.log("ADDED", { id: res.id, ...newProduct });
        result(null, { id: res.id, ...newProduct });
    });
};

ProductModel.deleteAll = result => {
    sql.query("Delete FROM product", (err, res) => {
        if (err) {
            console.log("Err", err);
            return;
        }
        console.log(`DEL ${res.afftedRows} customer`);
        result(null, res);
    });
};

module.exports = ProductModel;