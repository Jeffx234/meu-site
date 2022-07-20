import styled from 'styled-components'

export const Container = styled.header`
  padding: 1.3rem;
  width: 100%;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.shape};

  .menu {
    position: fixed;
    top: 0;
    right: 0;

    background: ${({ theme }) => theme.colors.shape};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: all 40s ease-in-out;
    z-index: 9999;
    gap: 4rem;
    font-size: 3rem;

    .delete {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9999;
      width: 2rem;
      height: 2rem;
      margin: 1.8rem 2.5rem;

      &:hover {
        filter: brightness(0.8);
      }
    }
    &.open {
      transform: translateX(100%);
    }
  }

  .toggle {
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      padding-left: 1rem;
      color: #fff;
    }

    a {
      text-decoration: none;
      color: #fff;
      transition: filter 0.5s;
      padding: 0.5rem;
    }

    a:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.greenDarkMode};
    }

    ul {
      display: flex;

      li {
        list-style: none;
        padding: 0 2rem;
      }
    }
  }

  @media (max-width: 700px) {
    .toggle {
      cursor: pointer;
      padding-right: 1rem;
      display: block;
    }

    margin-bottom: 4rem;

    nav {
      ul {
        display: none;
      }
    }
  }
`
