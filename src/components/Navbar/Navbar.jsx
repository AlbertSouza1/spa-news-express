import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
import { useForm } from "react-hook-form"
import { Button, Nav, Logo, InputSearchSpace, ErrorSpan } from './NavbarStyled'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchSchema = z.object({
    title: z.string()
        .nonempty({ message: "A pesquisa não pode ser vazia." })
        .refine(value => !/^\s*$/.test(value), {
            message: "A pesquisa não pode ser vazia."
        })
});

export function Navbar() {

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

                <Button>Entrar</Button>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}
