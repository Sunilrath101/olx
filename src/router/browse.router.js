const express = require("express");
const Product = require("../model/product.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { category, date, name, page = 1 } = req.query;
  let dataLength = await Product.count();
  try {
    let allProduct;
    if (category) {
      allProduct = Product.find({ category });
    } else if (name) {
      allProduct = Product.find({ name: { $regex: name, $options: "i" } });
    } else if (category && name) {
      allProduct = Product.find({
        category,
        name: { $regex: name, $options: "i" },
      });
    } else {
      allProduct = Product.find({});
    }

    if (date === "asc") {
      allProduct.sort("postedAt");
    } else if (date === "desc") {
      allProduct.sort("-postedAt");
    }
    allProduct.skip((page - 1) * 4).limit(4);
    let data = await allProduct;
    res.status(201).json({ dataLength, data: data });
  } catch (err) {
    console.log("err:", err);
    res.status(201).json({ message: "Something went wrong" });
  }
});

module.exports = app;
