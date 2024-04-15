const logger = require("../utils/logger.js");

const manual = {
    index(request, response){
        logger.info("manual rendering");
        const viewData = {
            title: "manual",
        };
        response.render("manual", viewData);
    }
};

module.exports = manual;