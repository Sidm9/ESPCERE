const sql = require("./db.js");

// constructor
const ProductModel = function (Product) {
    this.id = Product.id;
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
        return;
    });
};


ProductModel.findById = (id, result) => {
    sql.query(`SELECT * FROM PRODUCT WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found Product : ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ id: "Not Found" }, null);
    });
};

ProductModel.updateByID = (id, Product, result) => {
    sql.query(`UPDATE PRODUCT SET COUNT = ? WHERE ID = ?`, [Product.count , id], (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Product with the id
            result({ id: "not_found" }, null);
            return;
        }
        console.log("updated Product: ", { id: id, ...Product });
        result(null, { id: id, ...Product });
    });
};

ProductModel.deleteAll = result => {
    sql.query("TRUNCATE TABLE PRODUCT", (err, res) => {
        if (err) {
            console.log("Err", err);
            return;
        }
        console.log(`DEL ${res.affectedRows} Product`);
        result(null, res);
        return;
    });
};

module.exports = ProductModel;