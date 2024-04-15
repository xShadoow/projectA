const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const createGame = require("./controllers/createGame.js");

router.get("/", home.index);
router.get("/createGame", createGame.index);

module.exports = router;
