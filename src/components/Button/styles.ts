import styled from 'styled-components'

interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export const ContainerButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  display: ${({ loading }) => (loading ? 'none' : 'flex')};
  color: #fff;
  background: ${(props) => props.theme.colors[props.variant]};
  cursor: pointer;
  transition: filter 0.2s;
  border-radius: 8px;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
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
