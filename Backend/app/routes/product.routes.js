module.exports = app => {
  const product = require("../Controller/product.controller");
  // Retrieve all Product
  app.get("/product", product.findAll);
 // Retrieve one Product
  app.get("/productOne/:id" , product.productOne);
  // Update a Product with ID
  app.put("/product/:id", product.UpdateOne);
   // Create a new Product
   app.post("/create", product.create);
  // Delete all new Product
   app.delete("/deleteAll" , product.deleteAll);
};
