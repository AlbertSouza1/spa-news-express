import styled from "styled-components";

export const NewsContainer = styled.div`

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
        height: 100vh;
        margin: 3rem auto 0 auto;
        gap: 0.5rem;
    }

    h1{
        margin-bottom: 2rem;
        font-weight: bold;
    }
    
    input, textarea{
        width: 70%;
        font-size: 1.2rem;
    }

    textarea{
        height: 40%;
    }

    button{
        margin-top: 1.5rem;
        padding: 1rem;
    }
`;