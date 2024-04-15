const logger = require("../utils/logger.js");

const joinGame = {
    index(request, response){
        logger.info("joinGame rendering");
        const viewData = {
            title: "joinGame",
        };
        response.render("joinGame", viewData);
    }
};

module.exports = joinGame;