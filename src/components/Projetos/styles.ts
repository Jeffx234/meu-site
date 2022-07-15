import styled from "styled-components";

export const Container = styled.section `
margin-top: 8rem;
padding: 2rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 1rem;


span {
    color: ${({theme}) => theme.colors.primary}
}
  .proj {
    font-size: 2rem;
    text-align: center;
  }
`
export const Content = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .projeto {
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: 8px;
    padding: 2rem;
    background: ${({theme}) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

 
`

