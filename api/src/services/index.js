const users = require('./users/users.service.js');
const roles = require('./roles/roles.service.js');
const finePosts = require('./fine-posts/fine-posts.service.js');
const audits = require('./audits/audits.service.js');
const finePayments = require('./fine-payments/fine-payments.service.js');
const teams = require('./teams/teams.service.js');
const auth = require('./auth/auth.service.js');
module.exports = function (app) {
    app.configure(users);
    app.configure(roles);
    app.configure(finePosts);
    app.configure(audits);
    app.configure(finePayments);
    app.configure(teams);
    app.configure(auth);
};
