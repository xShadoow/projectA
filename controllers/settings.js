const logger = require("../utils/logger.js");

const settings = {
    index(request, response){
        logger.info("settings rendering");
        const viewData = {
            title: "settings",
        };
        response.render("settings", viewData);
    }
};

module.exports = settings;