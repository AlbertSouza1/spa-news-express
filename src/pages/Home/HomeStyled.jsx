import styled from "styled-components";
import { CardContainer } from "../../components/Cards/CardStyled";

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 1rem;
  width: 80%;
  margin: 0 auto;

   @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  ${CardContainer}{
    height: 100%;
  }
`;

export const HomeHeader = styled.section`
  width: 80%;
  display: flex;
  margin: 1rem auto;
  max-height: 550px;

  @media (max-width: 768px) {
    max-height: none;
  }

  ${CardContainer}{
    height: 100%;
    width: 100%;
  }
  
`;