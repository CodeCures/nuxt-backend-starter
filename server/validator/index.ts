import Joi from "joi";

export const UserRegister = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().required(),
    gender: Joi.string().valid('Male', 'Female').required(),
    address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zip: Joi.string().required(),
        country: Joi.string().required()
    }).required(),
    hobbies: Joi.array().min(1).required()
});