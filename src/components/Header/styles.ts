import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1rem 3rem;
  width: 100%;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.shape};
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const MenuHeaderNav = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  a {
    transition: all 0.3s ease-in-out;
    border: 2px solid ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.greenDarkMode};
    }
  }

  @media (max-width: 920px) {
    display: none;
  }
`
export const HeaderLeft = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    color: ${({ theme }) => theme.colors.greenDarkMode};
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 100%;
    }
  }

  button {
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.shape};
    transition: all 0.3s ease-in-out;
    padding: 0.1rem;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.greenDarkMode};
    }
  }
`

export const ModalMenuMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    li {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 100%;
    }
  }
`

export const MenuModalContainer = styled.div`
  @media (min-width: 920px) {
    display: none;
  }
`
