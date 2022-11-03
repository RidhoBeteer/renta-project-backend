const express = require("express");

const Router = express.Router();

const productRoutes = require("./product");
const authRoutes = require("./auth");

Router.use("/product", productRoutes);
Router.use("/auth", authRoutes);

module.exports = Router;
