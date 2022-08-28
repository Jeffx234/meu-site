import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  h1 {
    font-size: 2.5rem;
  }
`
export const Content = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  grid-gap: 70px;

  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

export const ContentItem = styled.div``
