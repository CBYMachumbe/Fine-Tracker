const mongoose = require('mongoose');

module.exports = function (app) {
    const modelName = 'users';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongoose;

    const schema = new mongooseClient.Schema(
        {
            name: { type: String },
            email: { type: String, unique: true, lowercase: true },
            password: { type: String },
            avatar: { type: String, default: '' },
            team: { type: Schema.Types.ObjectId, ref: 'teams' },
            roles: [{ type: String }]
        },
        {
            timestamps: true,
        }
    );

    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
};
