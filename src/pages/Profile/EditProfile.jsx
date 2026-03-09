import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/Contexts/UserContext";
import * as userService from "../../services/userService";
import { editProfileSchema } from "../../schemas/editProfileSchema";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
    EditContainer,
    EditHeader,
    EditBackground,
    EditUser,
    EditAvatar,
    AvatarWrapper,
    EditIconEdit,
    EditActions,
    FieldsPanel,
    FieldGroup,
    FieldLabel,
    FieldInput,
    FieldHint,
    SaveButton,
    CancelButton,
    ButtonRow,
    EditTitle,
    Overlay,
} from "./EditProfileStyled";
import { Link } from "react-router-dom";

export function EditProfile() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [previewName, setPreviewName] = useState("");
    const [previewUsername, setPreviewUsername] = useState("");
    const [previewAvatar, setPreviewAvatar] = useState("");
    const [previewBackground, setPreviewBackground] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
    } = useForm({
        resolver: zodResolver(editProfileSchema),
    });

    const watchedAvatar = watch("avatar");
    const watchedBackground = watch("background");
    const watchedName = watch("name");

    useEffect(() => {
        if (watchedAvatar) setPreviewAvatar(watchedAvatar);
    }, [watchedAvatar]);

    useEffect(() => {
        if (watchedBackground) setPreviewBackground(watchedBackground);
    }, [watchedBackground]);

    useEffect(() => {
        if (watchedName) setPreviewName(watchedName);
    }, [watchedName]);

    useEffect(() => {
        if (!Cookies.get("token")) {
            navigate("/auth");
            return;
        }

        if (!user) return;

        setValue("name", user.name);
        setValue("avatar", user.avatar);
        setValue("background", user.background);

        setPreviewName(user.name);
        setPreviewUsername(user.username);
        setPreviewAvatar(user.avatar);
        setPreviewBackground(user.background);
    }, [user]);

    async function updateProfile(userData) {
        try {
            const response = await userService.updateProfile(user.id, userData);
            setUser(response.data.data);
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <EditContainer>
            <form onSubmit={handleSubmit(updateProfile)}>

                {/* Visual preview — mesma estrutura do Profile */}
                <EditHeader>
                    <EditBackground
                        src={previewBackground || "https://placehold.co/1200x300/e0f0f8/cce0ea?text=+"}
                        alt=""
                    />
                    <Overlay />

                    <EditTitle>Editar Perfil</EditTitle>

                    <EditUser>
                        <AvatarWrapper>
                            <EditAvatar
                                src={previewAvatar || "https://placehold.co/200x200/cce0ea/0bade3?text=?"}
                                alt="foto do usuário"
                            />
                        </AvatarWrapper>
                        <h2>{previewName || "Seu Nome"}</h2>
                        <h3>@{previewUsername || "username"}</h3>
                    </EditUser>

                    <EditActions>
                        <Link to="/profile">
                            <CancelButton type="button">✕ Cancelar</CancelButton>
                        </Link>
                    </EditActions>
                </EditHeader>

                {/* Painel de campos abaixo do header visual */}
                <FieldsPanel>

                    <FieldGroup>
                        <FieldLabel htmlFor="name">Nome de exibição</FieldLabel>
                        <FieldInput
                            id="name"
                            type="text"
                            placeholder="Como você quer ser chamado?"
                            {...register("name")}
                        />
                        {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel htmlFor="avatar">
                            <span>Foto de perfil</span>
                            <FieldHint>Cole a URL de uma imagem</FieldHint>
                        </FieldLabel>
                        <FieldInput
                            id="avatar"
                            type="url"
                            placeholder="https://exemplo.com/minha-foto.jpg"
                            {...register("avatar")}
                        />
                        {errors.avatar && <ErrorSpan>{errors.avatar.message}</ErrorSpan>}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel htmlFor="background">
                            <span>Foto de capa</span>
                            <FieldHint>Cole a URL de uma imagem</FieldHint>
                        </FieldLabel>
                        <FieldInput
                            id="background"
                            type="url"
                            placeholder="https://exemplo.com/minha-capa.jpg"
                            {...register("background")}
                        />
                        {errors.background && <ErrorSpan>{errors.background.message}</ErrorSpan>}
                    </FieldGroup>

                    <ButtonRow>
                        <SaveButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Salvando..." : "Salvar alterações"}
                        </SaveButton>
                    </ButtonRow>

                </FieldsPanel>

            </form>
        </EditContainer>
    );
}
