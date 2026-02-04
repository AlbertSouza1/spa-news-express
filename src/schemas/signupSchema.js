import z from "zod";

export const signupSchema = z.object({
    name: z.string()
        .nonempty("O nome é obrigatório.")
        .transform(
            (name) => name.trim()
                .split(' ')
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")),
    email: z.email("E-mail inválido.").toLowerCase(),
    password: z.string().min(6, "A senha deve conter ao menos 6 caracteres."),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"]
});
