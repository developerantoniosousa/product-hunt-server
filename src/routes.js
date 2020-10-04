const express = require("express");

const ProductController = require("./controllers/ProductController");

const routes = express.Router();

routes.get("/products", ProductController.index);

module.exports = routes;
