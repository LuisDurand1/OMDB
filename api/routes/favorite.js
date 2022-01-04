const express = require("express");
const routerFavorite = express.Router();
const FavoriteController = require("../controllers/favorite");

routerFavorite.get("/:userId", FavoriteController.favorites);
routerFavorite.post("/", FavoriteController.addFavorites);
routerFavorite.delete("/delete", FavoriteController.delete);

module.exports = routerFavorite;
