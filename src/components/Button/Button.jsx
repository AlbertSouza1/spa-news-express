import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text, disabled }) {
    return (
        <ButtonSpace type={type} disabled={disabled}>{text}</ButtonSpace>
    );
}