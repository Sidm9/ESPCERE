const Product = require("../models/product.model.js");
// Retrieve all Customers from the database.
exports.findAll = (req, res) => {

  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Product."
      });
    else res.send(data);
  });

};
// CREATE 
exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Product
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    count: req.body.count
  });

  // Save Product in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });
};


exports.productOne = (req, res) => {

  Product.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.id === "Not Found") {
        res.status(500).send({
          message: `Not found Product with id ${req.params.id}.`
        });
      }
      else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.UpdateOne = (req, res) => {
  Product.updateByID(req.params.id, new Product(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Product with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.deleteAll = (req, res) => {

  Product.deleteAll((err, data) => {
    if (err)
      res.status(500), self({
        message:
          err.message || "Some error occurred while creating the Product."
      });
  });

}