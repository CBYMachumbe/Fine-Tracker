const logger = require('../logger');

module.exports = async (app) => {
    logger.info('running the seeder.');
    try {
        if (app) {
            logger.info('getting users for seeding check');
            const users = await app.service('users').find();
            logger.info(`${users.total} users found`);
            if (users.total === 0) {
                logger.info('seeding in progress');
                await app.seed();
                logger.info('seeding done');
                return;
            }
        }
    } catch (error) {
        logger.error('seeding went wrong!', error);
    }
};
