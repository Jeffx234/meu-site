import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  height: 600px;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  .helloworld {
    display: flex;
    align-items: center;
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
  @media (max-width: 768px) {
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
  position: relative;
  width: 50%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
`

export const Image = styled.div`
  margin-left: 2rem;
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
  img {
    width: 100%;
  }
`

export const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.5rem;
  span {
    color: ${({ theme }) => theme.colors.greenDarkMode};
  }
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    border: 2px solid ${({ theme }) => theme.colors.greenDarkMode};
    border-radius: 5px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.greenDarkMode};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
    }
  }
`
