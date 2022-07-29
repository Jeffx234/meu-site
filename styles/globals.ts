import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

html {
  scroll-behavior: smooth;

  @media (max-width: 1080px) {
    font-size: 93.75%; //15px;
  }

  @media (max-width: 720px) {
    font-size: 87.5%; //14px;
  }

}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}


  button {
    cursor: pointer;
  }

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
} 

.container {
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
}


`

export const Hr = styled.div`
  margin-top: 5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  height: 1px;
`
