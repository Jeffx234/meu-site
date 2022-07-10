import styled from "styled-components";

export const Container = styled.main `
  width: 100%;
  height: 600px;
  text-align: center;
  color: white;
  justify-content: space-between;
  align-items: center;
  background: url('/images/fundo.jpg') no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid ${({theme}) => theme.colors.primary};

  .helloworld {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    img {
      width: 10%;
    }


    p {
      font-size: 1.5rem;
      margin-left: 1rem;
      color: ${({theme}) => theme.colors.green};
      padding-top: 1.5rem;
    }
  }
  

  @media(max-width: 750px) {
    border: 1px solid red;

    h1 {
      text-align: center;
    }
  }

  @media(max-width: 1024px) {
    padding-top: 10rem;

  }
`;



export const Name = styled.div`
width: 60%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;

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
  margin: 1rem;
  padding: auto;
  transition: filter 0.2s;

  &:hover {
    background: ${({theme}) => theme.colors.primary};;
  }

  svg {
    margin-left: .5rem;
  }
}

p {
  font-size: 3.5rem;
  line-height: 2.5rem;
}
  
  h1 {
    font-size: 5.5rem;
  }

  p{
    margin-bottom: 1rem;


    span {
      color: ${({theme}) => theme.colors.primary};
      font-weight: bold;
    }
  }


  .buttons {
    display: flex;

    button {
      margin-right: 1rem;
      background: #141452;
    }
  }

  .contato {
    margin-left: 1rem;
    text-align: center;

    .whats {
      margin-right: .3rem;
      margin-top: .1rem;
    }
  }

  

  img {
    width: 100px;
  }

  .position {
    margin-top: 1rem;
    font-size: 1.5rem;
  }




/* Responsividade */
  @media(max-width: 750px) {
    text-align: center;
    width: 100%;


    h1 {
    font-size: 2.3rem;
    
  }

  p{
    margin-bottom: 1rem;

    span {
      color: red;
      font-weight: bold;
    }
  }

  
  button {
    padding: .8rem 2rem;
    cursor: pointer;
    transition: filter 0.2s;
    border-radius: 8px;
  }

 
}
  
`


export const Image = styled.div `
  margin-left: 2rem;

  @media(max-width: 750px) {
    img {
      display: none;
    }
  }
   
  

  img {
    width: 100%;
  }



`