export default defineEventHandler(async (request) => {
    if (request.context.hasQueryString())
        return await User.find(request.context.query);

    return await User.find();
});