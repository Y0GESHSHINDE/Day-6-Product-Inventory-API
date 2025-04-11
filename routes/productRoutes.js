const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create product
router.post('/', async (req, res) => {
  const { name, price, inStock, category } = req.body;
  const product = new Product({ name, price, inStock, category });
  await product.save();
  res.json(product);
});

// Get all products with filtering and sorting
router.get('/', async (req, res) => {
  const { category, sortBy } = req.query;
  let query = {};
  if (category) query.category = category;

  let sort = {};
  if (sortBy === 'price') sort.price = 1;
  else if (sortBy === 'stock') sort.inStock = -1;

  const products = await Product.find(query).sort(sort);
  res.json(products);
});

module.exports = router;
