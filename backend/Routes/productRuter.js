const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controller/productController");
const router =express.Router();


router.get("/getAllProducts", getAllProducts);
router.post("/createProduct", createProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/get-product-details/:id", getProductDetails);



module.exports =router;