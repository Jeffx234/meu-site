import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  height: 600px;
  text-align: center;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  .helloworld {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    img {
      width: 10%;
      height: 10%;
      margin-top: 0.8rem;
    }

    p {
      font-size: 1.5rem;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.green};
      padding-top: 1.5rem;
    }
  }

  @media (max-width: 750px) {
    padding-top: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 2rem;
    .image {
      display: none;
    }

    h1 {
      text-align: center;
    }
  }

  .image {
    width: 50%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.greenDarkMode};
    text-decoration: none;
    color: #fff;
    border-radius: 7px;
    margin: 1rem;
    padding: auto;
    transition: filter 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.greenDarkMode};
    }

    svg {
      margin-left: 0.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  h1 {
    font-size: 4.5rem;
  }

  p {
    span {
      color: ${({ theme }) => theme.colors.greenDarkMode};
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
      margin-right: 0.3rem;
      margin-top: 0.1rem;
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
  @media (max-width: 750px) {
    text-align: center;
    width: 100%;

    h1 {
      font-size: 2.3rem;
    }

    p {
      margin-bottom: 1rem;

      span {
        color: red;
        font-weight: bold;
      }
    }

    button {
      padding: 0.8rem 2rem;
      cursor: pointer;
      transition: filter 0.2s;
      border-radius: 8px;
    }
  }
`

export const Image = styled.div`
  margin-left: 2rem;

  @media (max-width: 750px) {
    img {
      display: none;
    }
  }

  img {
    width: 100%;
  }
`
