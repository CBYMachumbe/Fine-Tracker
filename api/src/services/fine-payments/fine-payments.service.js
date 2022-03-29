// Initializes the `fine-payments` service on path `/fine-payments`
const { FinePayments } = require('./fine-payments.class');
const createModel = require('../../models/fine-payments.model');
const hooks = require('./fine-payments.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fine-payments', new FinePayments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fine-payments');

  service.hooks(hooks);
};
