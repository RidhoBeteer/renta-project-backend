const express = require("express");

const Router = express.Router();

const productRoutes = require("./product");

Router.use("/product", productRoutes);

module.exports = Router;
