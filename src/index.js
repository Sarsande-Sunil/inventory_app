const express = require("express");

const connect = require("../src/config/db");

const productRoute = require("../src/controller/Product.controllers");

const app = express();

// global middle ware 
app.use(express.json());

// local middleware 
app.use("/product", productRoute);

const PORT = 5000;

// app server running 
app.listen(PORT, async () => {
    try {
        await connect();
        console.log("Database connected successfully");
    }
    catch (err) {
        console.log(err.message)
    }
    console.log(`app is running on ${PORT}`);
});

