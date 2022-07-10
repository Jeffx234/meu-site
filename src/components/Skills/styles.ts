import styled from 'styled-components'



export const Container = styled.div `
  margin-top: 5rem ;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
 
`
export const Content = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: .5rem;
    padding: 4rem;

    div {
    width: 100%;
    height: 150px;
    background: #fff;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

`