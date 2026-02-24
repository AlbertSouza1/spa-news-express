import { useState } from "react";
import { InputSpace, TextAreaSpace } from "./InputsStyled";

function getProperties({ type, placeholder, name, register, value, onChange }) {
    const { onChange: registerOnChange, ...rest } = register(name);

    let inputProps = {
        placeholder,
        ...rest,
        onChange: (e) => {
            registerOnChange(e);
            onChange(e);
        }
    };

    if (type) inputProps.type = type;
    if (value) inputProps.value = value;

    return inputProps;
}

export function Input({ type, placeholder, name, register, value: initialValue }) {
    const [value, setValue] = useState(initialValue);

    const inputProps = getProperties({
        type,
        placeholder,
        name,
        register,
        value,
        onChange: (e) => setValue(e.target.value)
    });

    return <InputSpace {...inputProps} />;
}

export function TextArea({ placeholder, name, register, value: initialValue }) {
    const [value, setValue] = useState(initialValue);

    const inputProps = getProperties({
        placeholder,
        name,
        register,
        value,
        onChange: (e) => setValue(e.target.value)
    });

    return <TextAreaSpace {...inputProps} />;
}