import { InputSpace, TextAreaSpace } from "./InputsStyled";

function getProperties({ type, placeholder, name, register, value }) {
    let inputProps = {
        type,
        placeholder,
        ...register(name)
    };

    if (value) inputProps.value = value;

    return inputProps;
}

export function Input({ type, placeholder, name, register, value }) {
    const inputProps = getProperties({ type, placeholder, name, register, value });

    return <InputSpace {...inputProps} />;
}

export function TextArea({ type, placeholder, name, register, value }) {
    const inputProps = getProperties({ type, placeholder, name, register, value });

    return <TextAreaSpace {...inputProps} />;
}