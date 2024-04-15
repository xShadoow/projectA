const logger = require("../utils/logger.js");

const createGame = {
    index(request, response){
        logger.info("createGame rendering");
        const viewData = {
            title: "createGame",
        };
        response.render("Create Game", viewData);
    }
};

module.exports = createGame;