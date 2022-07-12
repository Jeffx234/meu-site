import styled from 'styled-components'

export const Container = styled.div `
  margin-top: 5rem ;

  h1 {
    text-align: center;
    font-size: 2.3rem;
  }
  
 
`
export const Content = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: .5rem;
    padding: 1rem 2rem;
    
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

`