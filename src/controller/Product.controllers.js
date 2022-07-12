// making controllers and route for product
const express = require("express");

const router = express.Router();
const Product = require("../Model/product.models");

// route for creating product s
router.post("/new", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);

    }
    catch (err) {
        console.log(err.message);
    }
});

// for getting all the product 
router.get("/all", async (req, res) => {
    try {
        const product = await Product.find().lean().exec();
        res.status(200).send(product);
    }
    catch (err) {
        console.log(err.message)
    }
});

// for remving quantity we use particular id for delete product 
router.delete("/:id", async (req, res) => {
    try {
        // find product id and delete query 
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            res.send("product is not found")
        }
        res.send(product);
    }
    catch (err) {
        console.log(err);
    }
});

// for updating product if we want update product database 
router.patch("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!req.params.id) {
            res.send("product not found")
        }
        res.send(product);
    }
    catch (err) {
        console.log(err.message);
    }
});

// all route working done

module.exports = router;