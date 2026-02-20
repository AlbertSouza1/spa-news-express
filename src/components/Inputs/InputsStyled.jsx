import styled from "styled-components";

export const InputSpace = styled.input`
    padding: 1rem;
    border-radius: 7px;
    border: 1px solid #CCC;
`;

export const TextAreaSpace = styled(InputSpace).attrs({ as: "textarea" })`
    resize: none;
`;