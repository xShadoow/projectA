const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const impressum = require("./controllers/impressum.js");
const datenschutz = require("./controllers/datenschutz.js");
const createGame = require("./controllers/createGame.js");
const joinGame = require("./controllers/joinGame.js");
const settings = require("./controllers/settings.js");
const manual = require("./controllers/manual.js");

router.get("/", home.index);
router.get("/impressum", impressum.index);
router.get("/datenschutz", datenschutz.index);
router.get("/createGame", createGame.index);
router.get("/joinGame", joinGame.index);
router.get("/settings", settings.index);
router.get("/manual", manual.index);


module.exports = router;
