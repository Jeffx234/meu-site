import styled from "styled-components";

export const Container = styled.footer `
margin-top: 5rem;
width: 100%;
padding: 4rem;
background: ${({theme}) => theme.colors.shape};

h1 {
  font-size: 1.5rem;
  color: #fff;
  text-align: center;

  span {
    color: red;
  }
}
`