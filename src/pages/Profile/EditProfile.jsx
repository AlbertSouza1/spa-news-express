import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Inputs/Inputs";
import { NewsContainer } from "./EditProfileStyled";
import { useForm } from "react-hook-form";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/Contexts/UserContext";
import * as userService from "../../services/userService";
import { editProfileSchema } from "../../schemas/editProfileSchema";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function EditProfile() {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register: registerEditProfile,
        handleSubmit: handleSubmitEditProfile,
        formState: { errors: errors },
        setValue,
    } = useForm({
        resolver: zodResolver(editProfileSchema)
    })

    async function updateProfile(userData) {
        try {
            const response = await userService.updateProfile(user.id, userData);
            setUser(response.data.data);
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        if (!Cookies.get("token")) {
            navigate("/auth");
            return;
        }

        function getProfileData() {
            try {
                console.log("Rodou USE EFFECT");
                if (!user) return;

                setValue("name", user.name);
                setValue("avatar", user.avatar);
                setValue("background", user.background);
            } catch (error) {
                console.log(error);
            }
        }

        getProfileData();
    }, [])

    return (
        <NewsContainer>
            <form onSubmit={handleSubmitEditProfile(updateProfile)}>
                <h1>Editar Perfil</h1>
                <Input type="text" placeholder="Nome" name="name" register={registerEditProfile} />
                {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
                <Input type="text" placeholder="URL da sua foto de perfil" name="avatar" register={registerEditProfile} />
                <Input type="text" placeholder="URL da sua foto de plano de fundo" name="background" register={registerEditProfile} />
                <Button type="submit" text="Atualizar"></Button>
            </form>
        </NewsContainer>
    )

}   