import z from "zod";

export const signinSchema = z.object({
    email: z.email("E-mail inválido").toLowerCase(),
    password: z.string().nonempty("Senha inválida.")
});