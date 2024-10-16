import z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    message: z.string().min(1, "Message cannot be empty"),
})

export type User = z.infer<typeof contactFormSchema>;