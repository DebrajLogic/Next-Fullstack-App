import { z } from "zod";

export const usernameValdation = z
    .string()
    .min(2, 'Username must be atleast 2 characters')
    .max(20, 'Username must be maximum 2 characters')
    .regex(/^[a-zA-Z0-9._-]$/
        ,'Username must not contain special characters')

export const signUpSchema = z.object({
    username: usernameValdation,
    email: z.string().email({message: 'Invalid Email Address'}),
    password: z.string().min(6, {message: 'Password must be minimum 6 characters'})
})