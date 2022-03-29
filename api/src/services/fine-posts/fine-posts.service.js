// Initializes the `fine-posts` service on path `/fine-posts`
const { FinePosts } = require('./fine-posts.class');
const createModel = require('../../models/fine-posts.model');
const hooks = require('./fine-posts.hooks');

module.exports = function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
    };

    // Initialize our service with any options it requires
    app.use('/fine-posts', new FinePosts(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('fine-posts');

    service.hooks(hooks);
};
