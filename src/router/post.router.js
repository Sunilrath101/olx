const express = require("express");
const Product = require("../model/product.model");

const app = express.Router();

app.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Post created" });
  } catch (err) {
    console.log("err:", err);
    res.status(201).json({ message: "Something went wrong" });
  }
});

module.exports = app;
