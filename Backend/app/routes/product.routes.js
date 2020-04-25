module.exports = app => {
  const product = require("../Controller/product.controller");
  // Retrieve all Customers
  app.get("/product", product.findAll);
  app
};
