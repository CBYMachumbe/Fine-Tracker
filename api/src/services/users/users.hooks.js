const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;

module.exports = {
    before: {
        all: [],
        find: [
            // (context) => {
            //     context.params.query.$populate = [
            //         {
            //             path: 'teams',
            //         },
            //     ];
            // },
        ],
        get: [],
        create: [hashPassword('password')],
        update: [],
        patch: [],
        remove: [],
    },

    after: {
        all: [protect('password')],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
