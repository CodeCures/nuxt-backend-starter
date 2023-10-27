import { throwIf } from "~/server/helpers";

export default defineEventHandler(async (request) => {
    const _id = request.context.params?.id;

    const { deletedCount: deleted } = await User.deleteOne({ _id });

    throwIf(!deleted, "User not found")

    return { message: "User deleted successfully!" }
});