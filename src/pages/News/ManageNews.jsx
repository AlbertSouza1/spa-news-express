import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input, TextArea } from "../../components/Inputs/Inputs";
import { NewsContainer } from "./ManageNewsStyled";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as newsService from "../../services/newsService";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { useEffect } from "react";

const newsSchema = z.object({
    title: z.string()
        .nonempty({ message: "É obrigatório informar o título da notícia." }),
    banner: z.string()
        .nonempty({ message: "É obrigatório informar a imagem de capa." }),
    text: z.string()
        .nonempty({ message: "É obrigatório informar o conteúdo da notícia." }),

});

export function ManageNews() {

    const { id } = useParams();
    const isEditing = !!id;
    const navigate = useNavigate();

    const {
        register: registerSubmitNews,
        handleSubmit: handleSubmitNews,
        formState: { errors: errors },
        setValue,
    } = useForm({
        resolver: zodResolver(newsSchema)
    })

    async function addNewsSubmit(newsData) {
        try {
            console.log(newsData);
            const response = await newsService.addNews(newsData);
            console.log(response);
            navigate("/profile");

        } catch (error) {
            alert(error.response.data.message);
        }
    }

    async function editNewsSubmit(newsData) {
        try {
            const response = await newsService.editNews(newsData, id);
            alert("Successfuly updated news.");
            console.log(response);
            navigate("/profile");
        } catch (error) {
            alert(error.response?.data?.message);
        }
    }

    useEffect(() => {
        async function getEditingNews(id) {
            try {
                const data = (await newsService.getNewsById(id)).data.data;
                setValue("title", data.title);
                setValue("banner", data.banner);
                setValue("text", data.text);
            } catch (error) {
                alert(error.response?.data?.message);
            }
        }
        if (isEditing) {
            getEditingNews(id);
        }
    }, []);

    return (

        <NewsContainer>
            <form onSubmit={
                isEditing
                    ? handleSubmitNews(editNewsSubmit)
                    : handleSubmitNews(addNewsSubmit)
            }>
                <h1>{isEditing ? "Editar Notícia" : "Publicar Nova Notícia"}</h1>
                <Input type="text" placeholder="Título" name="title" register={registerSubmitNews} />
                {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
                <Input type="text" placeholder="URL da capa" name="banner" register={registerSubmitNews} />
                {errors.banner && <ErrorSpan>{errors.banner.message}</ErrorSpan>}
                <TextArea type="text" placeholder="Conteúdo" name="text" register={registerSubmitNews} />
                {errors.text && <ErrorSpan>{errors.text.message}</ErrorSpan>}
                <Button type="submit" text={isEditing ? "Atualizar" : "Publicar"}></Button>
            </form>
        </NewsContainer>
    )
}