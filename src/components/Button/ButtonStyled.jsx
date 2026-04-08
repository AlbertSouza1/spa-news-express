import styled from "styled-components";

export const ButtonSpace = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

    &:hover:not(:disabled) {
      background-color: #0a86af;
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
`;