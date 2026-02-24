import { RiseLoader } from "react-spinners";
import styled from "styled-components";

const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 1.5rem;
        font-weight: bold;
        color: #023344;
        margin-bottom: 1.5rem;
    }
`;
export function Loader() {

    return (
        <LoaderContainer>
            <h2>Por favor, aguarde...</h2>
            <RiseLoader color="#0bade3" size={15} loading={true}  />
        </LoaderContainer>
    )
}