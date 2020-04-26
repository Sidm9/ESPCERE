module.exports = app => {
  const product = require("../Controller/product.controller");
  // Retrieve all Customers
  app.get("/product", product.findAll);


   // Create a new Customer
   app.post("/create", product.create);
};
