module.exports = function (app) {
    if (typeof app.channel !== 'function') {
        // If no real-time functionality has been configured just return
        return;
    }

    app.on('connection', (connection) => {
        app.channel('anonymous').join(connection);
    });

    app.on('login', (authResult, { connection }) => {
        if (connection) {
            app.channel('anonymous').leave(connection);
            app.channel('authenticated').join(connection);
            app.channel('admin').join(connection);
            app.channel('users/added').join(connection);
            app.channel('users/created').join(connection);
            // app.channel(`team/${connection.user.team}`).join(connection); // adding this user to their teams channel
        }
    });

    // eslint-disable-next-line no-unused-vars
    app.publish((data, hook) => {
        return app.channel('admin'); // admins get to see everything in realtime
    });

    app.service('users').publish('created', () => {
        return [app.channel('users/created')];
    });

    app.service('users').publish('updated', () => {
        return [app.channel('users/created')];
    });

    app.service('fine-posts').publish('created', (finePost) => {
        app.channel(`team/${finePost.finer.team}`);
    });

    app.service('fine-posts').publish('patched', (finePost) => {
        app.channel(`team/${finePost.finer.team}`);
    });
};
