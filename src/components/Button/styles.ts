import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  height: 2.5rem;
  color: #fff;
  cursor: pointer;
  transition: filter 0.2s;
  border-radius: 8px;
  border: 0;
  width: 100%;
  text-align: center;

  &:hover {
    filter: brightness(0.8);
  }

  .button-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .title {
    padding-left: 0.3rem;
  }
`
