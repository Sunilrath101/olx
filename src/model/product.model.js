const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    category: String,
    image: String,
    location: String,
    postedAt: Date,
    price: Number,
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
