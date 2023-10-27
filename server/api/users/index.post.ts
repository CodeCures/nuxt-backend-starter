import { UserRegister } from "~/server/validator";

export default defineEventHandler(async (request) => {
    const body = await readBody(request)

    const { error, value } = UserRegister.validate(body);
    if (error) return error;

    const user = await new User(value).save();

    return user;
});