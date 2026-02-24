import styled from 'styled-components'

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
       rgba(0,0,0,0.05) 0px 1px 1px 0px;
    border-radius:0.3rem;
    padding: 2rem;
    background-color: #ffffff;
`;

export const CardBody = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  overflow: hidden; 

  img{
    min-width: 50%;
    height: ${props => props.variant === "top" ? "320px" : "150px"};
    object-fit: cover;
    object-position: center;
  }

  h2{
    font-size: ${props => props.variant === "top" ? "2.5rem" : "1.5rem"};
    margin-bottom: 0.5rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.variant === "top" ? "3" : "2"};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    @media (max-width: 768px) {  
      flex-direction: column;
      align-items: center;  
    }
  }

  a {
    align-self: flex-end;
    cursor: pointer;
    color: #0bade3;
  }

`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gaP: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`;