import { InputSpace, TextAreaSpace } from "./InputsStyled";

export function Input({ type, placeholder, name, register, value }){
    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)} value={value}/>
    );
}

export function TextArea({ placeholder, name, register, value }) {
    return (
        <TextAreaSpace placeholder={placeholder} {...register(name)} value={value} />
    );
}