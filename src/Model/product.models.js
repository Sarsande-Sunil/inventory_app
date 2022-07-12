// making product schemas here
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
