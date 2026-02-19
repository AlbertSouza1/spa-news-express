import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Inputs/Input";
import { NewsContainer, TextArea } from "./AddNewsStyled";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as newsService from "../../services/newsService";
import { useNavigate } from "react-router-dom";

export function AddNews() {

    const navigate = useNavigate();

    const newsSchema = z.object({
        title: z.string()
            .nonempty({ message: "É obrigatório informar o título da notícia." }),
        banner: z.string
            .nonempty({ message: "É obrigatório informar a imagem de capa." }),
        text: z.string
            .nonempty({ message: "É obrigatório informar o conteúdo da notícia." }),

    });

    const {
        register: registerAddNews,
        handleSubmit: handleSubmitAddNews,
        formState: { errors: errors },
    } = useForm({
        resolver: zodResolver(newsSchema)
    })

    async function onSubmitAddNews(newsData) {
        try {
            console.log(newsData);
            const response = await newsService.addNews(newsData);
            console.log(response);
            navigate("/profile");

        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <NewsContainer>
            <form onSubmit={handleSubmitAddNews(onSubmitAddNews)}>
                <h1>Publicar Nova Notícia</h1>
                <Input type="text" placeholder="Título" name="title" register={registerAddNews} />
                {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
                <Input type="text" placeholder="URL da capa" name="banner" register={registerAddNews} />
                {errors.banner && <ErrorSpan>{errors.banner.message}</ErrorSpan>}
                <TextArea placeholder="Conteúdo" name="text" register={registerAddNews} />
                {errors.text && <ErrorSpan>{errors.text.message}</ErrorSpan>}
                <Button type="submit" text="Publicar"></Button>
            </form>
        </NewsContainer>
    )
}