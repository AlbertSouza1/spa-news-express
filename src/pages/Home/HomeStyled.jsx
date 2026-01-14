import styled from "styled-components";

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
`;

export const HomeHeader = styled.section`
  width: 80%;
  display: flex;
  margin: 1rem auto;
  max-height: 550px;

  ${({ theme }) => `
    section {
      height: 100%;
      width: 100%;
      article:first-child {
        img {
          height: 320px !important; /* Imagem maior para o top news */
        }
        
        h2 {
          font-size: 1.5rem !important;
          -webkit-line-clamp: 3 !important; /* Permite 3 linhas no título */
        }
      }
    }
  `}

  @media (max-width: 768px) {
    max-height: none;
  }
`;