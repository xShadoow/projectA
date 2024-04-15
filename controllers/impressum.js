const logger = require("../utils/logger.js");

const home = {
    index(request, response) {
        logger.info("impressum rendering");
        const viewData = {
            title: "Impressum"
        };
        response.render("impressum", viewData);
    },
};

module.exports = home;
