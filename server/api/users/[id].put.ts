import { throwIf } from "~/server/helpers";

export default defineEventHandler(async (request) => {
    const _id = request.context.params?.id;

    const requestBody = await readBody(request);

    const updated = await User.findOneAndUpdate({ _id }, requestBody);

    throwIf(!updated, "User not found");

    return { message: "user updated successfully!" };
});