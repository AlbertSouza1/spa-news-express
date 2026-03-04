import z from "zod";

export const newsSchema = z.object({
    title: z.string()
        .nonempty({ message: "É obrigatório informar o título da notícia." }),
    banner: z.string()
        .nonempty({ message: "É obrigatório informar a imagem de capa." }),
    text: z.string()
        .nonempty({ message: "É obrigatório informar o conteúdo da notícia." }),

});