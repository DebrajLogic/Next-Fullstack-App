import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, {message: 'Content must be minimun 10 characters'})
        .max(300, {message: 'Content must be maximum 300 characters'}),
    password: z.string()
})