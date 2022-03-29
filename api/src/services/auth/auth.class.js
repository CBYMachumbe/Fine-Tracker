exports.Auth = class Auth {
    constructor(app) {
        this.app = app;
    }

    async create(data) {
        console.log(this.app.service('authentication'));
        return await this.app.service('authentication').create({ strategy: 'local', ...data });
    }
};
