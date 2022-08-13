import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 8rem;
  text-align: center;
  align-items: center;
  width: 100%;

  button {
    margin-left: 1rem;
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
    height: 100%;
    object-fit: cover;
  }

  .item {
    svg {
      color: ${({ theme }) => theme.colors.greenDarkMode};
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
`

export const Foto = styled.div`
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding: 2rem;
    margin-bottom: 0;
    height: auto;
    margin-right: 0;
  }

  @media (min-width: 481px) and (max-width: 916px) {
    width: 70%;
    padding: 2rem;
    margin-bottom: 0;
    height: auto;
    margin-right: 0;
  }

  @media (min-width: 920px) {
    width: 367px;
    height: 367px;
  }
`

export const SobreMim = styled.div`
  margin-left: 1rem;
  padding: 1rem;
  width: 60%;
  text-align: center;
  border-left: 1px solid ${({ theme }) => theme.colors.green};

  @media (max-width: 920px) {
    border: none;
    h1 {
      font-size: 2rem;
    }
  }

  h2 {
    margin: 40px 0;
    font-size: 1rem;
  }

  @media (max-width: 920px) {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
  }
`

export const Icon = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      height: auto;
    }
  }

  h1 {
    font-size: 5rem;
  }
`
