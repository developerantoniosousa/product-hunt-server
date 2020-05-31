const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Product = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  }
}, {
  timestamps: true
})

Product.plugin(mongoosePaginate)

module.exports = mongoose.model('Product', Product)