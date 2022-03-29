// hook that changes model._id to id for the client
module.exports = () => {
    return async (context) => {
        const { result } = context;
        if (result._id !== null || result._id !== undefined) {
            result.id = result._id;
            delete result._id;
            return context;
        }
        return context;
    };
};
