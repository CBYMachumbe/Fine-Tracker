const mongoose = require('mongoose');

module.exports = function (app) {
    const modelName = 'teams';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongoose;
    
    const schema = new mongooseClient.Schema(
        {
            name: { type: String },
            logo: { type: String },
            members: [{ type: Schema.Types.ObjectId, ref: 'users' }],
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
