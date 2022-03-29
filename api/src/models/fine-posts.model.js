const mongoose = require('mongoose');

module.exports = function (app) {
    const modelName = 'fine-posts';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongoose;

    const schema = new mongooseClient.Schema(
        {
            finer: { type: Schema.Types.ObjectId, ref: 'users' },
            finee: [{ type: Schema.Types.ObjectId, ref: 'users' }],
            description: { type: String },
            approves: [],
            disapproves: [],
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
