module.exports = function (app) {
    const modelName = 'roles';
    const mongooseClient = app.get('mongooseClient');
    const schema = new mongooseClient.Schema(
        {
            role: { type: String, unique: true, lowercase: true },
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
