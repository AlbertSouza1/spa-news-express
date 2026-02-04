import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Inputs/Input";
import { AuthContainer, Section } from "./AuthStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { useEffect } from "react";
import { signupSchema } from "../../schemas/signupSchema";
import { signinSchema } from "../../schemas/signinSchema";
import * as userService from "../../services/userService";

export function Auth() {

    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        reset: resetSignup,
        formState: { errors: errorsSignup },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        reset: resetSignin,
        formState: { errors: errorsSignin },
    } = useForm({
        resolver: zodResolver(signinSchema),
    });

    function onSubmitSignin(data) {
        console.log(data);
    }

    async function onSubmitSignUp(data) {
        try {
            const response = await userService.signup(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
    }, [errorsSignup]);

    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>

                <form onSubmit={handleSubmitSignin(onSubmitSignin)}>
                    <Input type="text" placeholder="E-mail" name="email" register={registerSignin} />
                    {errorsSignin.email && <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>}
                    <Input type="text" placeholder="Password" name="password" register={registerSignin} />
                    {errorsSignin.password && <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>}
                    <Button type="input" text="Entrar" />
                </form>
            </Section>

            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(onSubmitSignUp)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                    {errorsSignup.name && <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>}
                    <Input type="text" placeholder="E-mail" name="email" register={registerSignup} />
                    {errorsSignup.email && <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                    {errorsSignup.password && <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>}
                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} />
                    {errorsSignup.confirmPassword && <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>}
                    <Button type="input" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    );
}