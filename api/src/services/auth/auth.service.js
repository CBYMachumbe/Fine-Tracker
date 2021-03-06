// Initializes the `auth` service on path `/auth`
const { Auth } = require('./auth.class');
const hooks = require('./auth.hooks');

module.exports = function (app) {
    // Initialize our service with any options it requires
    app.use('/auth', new Auth(app));

    // Get our initialized service so that we can register hooks
    const service = app.service('auth');

    service.hooks(hooks);
};
