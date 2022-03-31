exports.Auth = class Auth {
    constructor(app) {
        this.app = app;
    }

    async create(data) {
        return await this.app.service('authentication').create({ strategy: 'local', ...data });
    }
};
