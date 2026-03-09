import styled from "styled-components";

export const EditContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;

    form {
        width: 80%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`;

export const EditHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    border-radius: 0.3rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
        rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    background-color: #fff;
    z-index: 0;
    min-height: 180px;
`;

export const EditBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 50%;
    z-index: -1;
    border-radius: 0.3rem 0.3rem 0 0;
    transition: src 0.3s ease;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 100%);
    border-radius: 0.3rem 0.3rem 0 0;
    z-index: 0;
    pointer-events: none;
`;

export const EditTitle = styled.span`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
    letter-spacing: 0.03em;
    z-index: 1;
`;

export const EditUser = styled.div`
    padding: 2rem;

    h2 {
        font-weight: bold;
        padding-bottom: 0.1rem;
        transition: all 0.2s;
    }

    h3 {
        color: #666;
        font-size: 0.95rem;
    }
`;

export const AvatarWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export const EditAvatar = styled.img`
    border-radius: 50%;
    width: 13rem;
    height: 13rem;
    border: solid 5px #fff;
    object-fit: cover;
    object-position: center;
    box-shadow: 0 2px 12px rgba(11, 173, 227, 0.15);
    transition: all 0.3s ease;
    background-color: #e0f0f8;
`;

export const EditIconEdit = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #0bade3;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    svg {
        width: 30px;
        height: 30px;
    }
`;

export const EditActions = styled.div`
    padding: 2rem;
    display: flex;
    align-items: flex-end;
`;

/* Painel de campos */
export const FieldsPanel = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 0 0 0.3rem 0.3rem;
    border-top: 2px solid #e8f6fb;
    box-shadow: rgba(50, 50, 105, 0.10) 0px 4px 12px 0px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
`;

export const FieldLabel = styled.label`
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: #023344;
`;

export const FieldHint = styled.span`
    font-weight: 400;
    font-size: 0.78rem;
    color: #888;
`;

export const FieldInput = styled.input`
    width: 100%;
    padding: 0.65rem 1rem;
    border: 1.5px solid #dde8ee;
    border-radius: 0.4rem;
    font-size: 1rem;
    color: #023344;
    background: #f7fbfd;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;

    &:focus {
        border-color: #0bade3;
        box-shadow: 0 0 0 3px rgba(11, 173, 227, 0.12);
        background: #fff;
    }

    &::placeholder {
        color: #aabfc8;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    justify-content: flex-end;
`;

export const SaveButton = styled.button`
    padding: 0.75rem 2rem;
    background-color: #0bade3;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;

    &:hover:not(:disabled) {
        background-color: #0a86af;
        transform: translateY(-1px);
    }

    &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
    }
`;

export const CancelButton = styled.button`
    padding: 0.6rem 1.4rem;
    background-color: transparent;
    color: #666;
    border: 1.5px solid #dde8ee;
    border-radius: 0.4rem;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: #0bade3;
        color: #0bade3;
    }
`;
