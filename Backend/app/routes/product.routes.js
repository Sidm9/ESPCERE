module.exports = app => {
  const product = require("../Controller/product.controller");
  // Retrieve all Product
  app.get("/product", product.findAll);
   // Create a new Product
   app.post("/create", product.create);
  // Delete all new Product
   app.delete("/deleteAll" , product.deleteAll);
};
