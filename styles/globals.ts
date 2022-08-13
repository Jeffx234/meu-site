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

  
.react-modal-overlay {
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
  height: 100%;
  width: 100%;
  backdrop-filter: blur(5px);
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,199,49,0.7707457983193278) 100%, rgba(31,197,198,0.26934523809523814) 100%, rgba(0,212,255,1) 100%);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  z-index: 9999;
}

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

interface ContainerProps {
  right?: boolean
  top?: boolean
}

export const ModalClose = styled.button<ContainerProps>`
  position: absolute;
  right: ${({ right }) => right || '1.5rem'};
  top: ${({ top }) => top || '1.5rem'};
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`
export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`
