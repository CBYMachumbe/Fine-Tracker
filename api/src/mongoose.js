const mongoose = require('mongoose');
const logger = require('./logger');
const seeder = require('./seeding');

module.exports = function (app) {
    mongoose
        .connect(app.get('mongodb'))
        .then(() => {
            seeder(app);
        })
        .catch((err) => {
            logger.error(err);
            process.exit(1);
        });

    app.set('mongooseClient', mongoose);
};
