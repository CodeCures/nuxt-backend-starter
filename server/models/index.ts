import { defineMongooseModel } from '#nuxt/mongoose'

export const User = defineMongooseModel('User', {
  name: String,
  age: Number,
  gender: { type: String, enum: ['Male', 'Female'] },
  address: Object,
  hobbies: Array
}, { timestamps: true })