const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const impressum = require("./controllers/impressum.js");
const datenschutz = require("./controllers/datenschutz.js");
const createGame = require("./controllers/createGame.js");

router.get("/", home.index);
router.get("/impressum", impressum.index);
router.get("/datenschutz", datenschutz.index);
router.get("/createGame", createGame.index);

module.exports = router;
