const logger = require('../logger');
const util = require('util');

module.exports = function () {
    logger.info(`Logging middleware initialised at level ${logger.level}`);
    return (context) => {
        logger.info(`${context.type} app.service('${context.path}').${context.method}()`);

        if (typeof context.toJSON === 'function' && logger.level === 'debug') {
            logger.debug('Hook Context', util.inspect(context, { colors: false }));
        }

        if (context.error && !context.result) {
            logger.error(context.error.stack);
        }
    };
};
