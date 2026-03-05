import z from "zod";

export const editProfileSchema = z.object({
    name: z.string()
        .nonempty({ message: "É obrigatório informar o nome." }),
    avatar: z.string()
        .optional(),
    background: z.string()
        .optional()
});