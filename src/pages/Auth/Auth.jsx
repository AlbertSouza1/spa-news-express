import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Inputs/Input";
import { AuthContainer, Section } from "./AuthStyled";

export function Auth() {
    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>

                <form>
                    <Input type="text" placeholder="E-mail" name="email" />
                    <Input type="text" placeholder="Password" name="password" />
                </form>
                <Button type="button" text="Entrar" />
            </Section>

            <Section type="signup">
                <h2>Cadastrar</h2>
                <form>
                    <Input type="text" placeholder="Nome" name="name" />
                    <Input type="text" placeholder="E-mail" name="email" />
                    <Input type="text" placeholder="Senha" name="password" />
                    <Input type="text" placeholder="Confirmar senha" name="confirm-password" />
                    <Button type="button" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    );
}