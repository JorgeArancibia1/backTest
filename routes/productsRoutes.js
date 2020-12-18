/*
  Products Routes
  /api/products
*/

const { Router } = require("express");
const { getProducts } = require("../controllers/productsController");
const router = Router();

//Get products
router.get("/", getProducts);

module.exports = router;
