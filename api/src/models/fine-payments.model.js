const mongoose = require('mongoose');

module.exports = function (app) {
    const modelName = 'fine-payments';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongoose;

    const schema = new mongooseClient.Schema(
        {
            finePostId: { type: Schema.Types.ObjectId, ref: 'fine-posts' },
            witness: { type: Schema.Types.ObjectId, ref: 'users' },
            description: { type: String },
            isApproved: { type: Boolean, default: false },
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
