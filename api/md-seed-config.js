const mongoose = require('mongoose');
const { UsersSeeder, RolesSeeder } = require('./seeders');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/fine-tracker';

module.exports = {
    seedersList: {
        UsersSeeder,
        RolesSeeder,
    },
    connect: async function () {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
    },
    dropdb: async function () {
        await mongoose.connection.db.dropDatabase();
    },
};
