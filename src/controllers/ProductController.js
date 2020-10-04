const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(request, response) {
    const products = await Product.find();
    return response.json(products);
  },
  async show(request, response) {
    const product = await Product.findById(request.params.id);
    return response.json(product);
  },
  async store(request, response) {
    const product = await Product.create(request.body);
    return response.json(product);
  },
};
