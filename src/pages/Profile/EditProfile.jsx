import { Button } from "../../components/Button/Button";
import { Input, TextArea } from "../../components/Inputs/Inputs";
import { NewsContainer } from "./EditProfileStyled";

export function EditProfile() {

    return (
        <NewsContainer>
            <form>
                <h1>Editar Perfil</h1>
                <Input type="text" placeholder="Nome" name="name" register={() => ""} />
                {/* {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>} */}
                <Input type="text" placeholder="URL da sua foto de perfil" name="avatar" register={() => ""} />
                {/* {errors.banner && <ErrorSpan>{errors.banner.message}</ErrorSpan>} */}
                <TextArea type="text" placeholder="URL da sua foto de plano de fundo" name="background" register={() => ""} />
                {/* {errors.text && <ErrorSpan>{errors.text.message}</ErrorSpan>} */}
                <Button type="submit" text="Atualizar"></Button>
            </form>
        </NewsContainer>
    )

}   