const logger = require("../utils/logger.js");

const home = {
    index(request, response) {
        logger.info("datenschutz rendering");
        const viewData = {
            title: "Datenschutz"
        };
        response.render("datenschutz", viewData);
    },
};

module.exports = home;
