const roles = require('./roles.seed-data');

module.exports = {
    services: [
        {
            path: 'teams',
            delete: false,
            template: {
                name: 'GaWD t3aM!',
                logo: 'Naaaaaaaaaaaaaaaathing Yet!',
                members: []
            },
            callback(team, seed) {
                return seed({
                    path: 'users',
                    delete: false,
                    multiple: true,
                    template: {
                        name: 'Jacob Muzonde',
                        email: 'jt.sliqe@gmail.com',
                        password: 'password123',
                        avatar: 'Naaaathing!',
                        roles: ['master'],
                        team: String(team._id),
                    }
                });
            }
        },
        {
            path: 'roles',
            delete: false,
            templates: roles,
            count: roles.length
        },
    ],
};
