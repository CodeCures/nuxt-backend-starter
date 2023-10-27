import { throwIf } from "~/server/helpers";

export default defineEventHandler(async (request) => {
    const id = request.context.params?.id
    const user = await User.findById(id);

    throwIf(!user, "User not Found");

    return user;

});