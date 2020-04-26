const Product = require("../models/product.model.js");
// Retrieve all Customers from the database.
exports.findAll = (req, res) => {

  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
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

  // Create a Customer
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    count: req.body.count
  });

  // Save Customer in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

exports.deleteAll = (req, res) => {


  Product.deleteAll((err, data) => {
    if (err)
      res.status(500), self({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
  });

  
}