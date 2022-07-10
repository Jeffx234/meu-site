import styled from "styled-components";

export const Container = styled.section `

margin-top: 8rem;
border: 1px solid red;

span {
    color: ${({theme}) => theme.colors.primary}
}


  .proj {
    font-size: 2rem;
    text-align: center;
  }
`
export const Content = styled.div `
  border: 1px solid blue;
  padding: 0 4rem;
  display: flex;
  width: 100%;
  height: 100%;
  



  .cards {
    border-radius: 7px;

   
    img {
      border: 2px solid ${({theme}) => theme.colors.primary};
    }
  }
  
  
  .icons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 3rem;
  border: 1px solid ${({theme}) => theme.colors.primary};
  text-decoration: none;
  color: #fff;
  border-radius: 7px;
  margin: 1rem 0;
  padding: auto;
  transition: filter 0.2s;

  &:hover {
    background: ${({theme}) => theme.colors.primary};;
  }

  svg {
    margin-left: .5rem;
  }
}
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

 
`

