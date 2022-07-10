import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  margin-top: 8rem;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  button {
    margin-left: 1rem;
  }

  img {
    width: 100%;
    border-radius: .5rem;
    height: 100%;
    object-fit: cover;
  }

  .item {
    svg {
      color: ${({theme}) => theme.colors.primary};
    }
    p {
      margin-top: 5px;
    }

    a {
      transition: filter 0.2s;
      text-decoration: none; 
      color: #fff;    
    }

      a:hover {
        filter: brightness(0.6);
    }
  }

  @media(max-width: 700px) {
    display: grid;


    img {
      width: 100%;
      height: 100%;
    }
 
  }
`

export const Foto = styled.div`
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: .2rem;


  @media(max-width: 750px) {
    width: 100%;
    height: 230px;
  }

  @media(min-width: 1048px) {
    width: 367px;
    height: 367px;
  }

  
 
`

export const SobreMim = styled.div`
  margin-left: 1rem;
  width: 60%;
  text-align: center;
  border-left: 1px solid ${({theme}) => theme.colors.green};

  h2 {
    margin: 40px 0;
    font-size: .9rem;
  }

  @media(max-width: 700px) {
    margin-top: 2rem;
    width: 100%;
  }
 
`

export const Icon = styled.div `
  margin: 40px 0;
  display: flex;
  justify-content: space-evenly;

  @media(max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

`
