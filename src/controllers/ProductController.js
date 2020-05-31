const Product = require('../models/Product')

class ProductController {
  async index(request, response) {
    const products = await Product.paginate({}, { limit: 10 })
    return response.json(products)
  }

  async show(request, response) {
    const product = await Product.findById(request.params.id)
    return response.json(product);
  }

  async store(request, response) {
    const product = await Product.create(request.body)
    return response.json(product)
  }

  async update(request, response) {
    const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true })
    return response.json(product)
  }

  async delete(request, response) {
    await Product.findByIdAndDelete(request.params.id)
    return response.json()
  }

}

module.exports = new ProductController()