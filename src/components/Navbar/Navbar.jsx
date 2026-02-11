import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
import { useForm } from "react-hook-form"
import { Nav, Logo, InputSearchSpace, ErrorSpan, LoggedUserSpace } from './NavbarStyled'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../Button/Button';
import * as userService from "../../services/userService";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const searchSchema = z.object({
    title: z.string()
        .nonempty({ message: "A pesquisa não pode ser vazia." })
        .refine(value => !/^\s*$/.test(value), {
            message: "A pesquisa não pode ser vazia."
        })
});

export function Navbar() {

    const [user, setUser] = useState({});

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(searchSchema),
    });

    const navigate = useNavigate();

    function onSubmit(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    }

    function authenticate() {
        navigate("/auth");
    }

    function signout(){

    }

    useEffect(() => {
        async function getLoggedUser() {
            try {
                const response = await userService.getLoggedUser();
                setUser(response.data.data);
            } catch (error) {
                alert(error);
                setUser({});
            }
        }

        if (Cookies.get("token")) getLoggedUser();

    }, [])

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputSearchSpace>
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                        <input {...register("title")} type="text" placeholder='Pesquise por um título' />
                    </InputSearchSpace>

                </form>

                <Link to="/">
                    <Logo src={logo} alt="Logo Breaking News" />
                </Link>

                {user ? (
                    <LoggedUserSpace>
                        <h2>{user.name}</h2>
                        <i onClick={signout}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg>
                        </i>

                    </LoggedUserSpace>
                ) : (
                    <Link to="/auth">
                        <Button onClick={authenticate} type="button" text="Entrar" />
                    </Link>
                )
                }

            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}
