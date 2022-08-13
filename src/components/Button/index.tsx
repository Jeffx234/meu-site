import { ContainerButton } from './styles'

interface IProps {
  title: string
  icon?: any
  onClick?: () => void
  type?: 'button' | 'submit'
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
}

export function Button({ title, icon, variant }: IProps) {
  return (
    <ContainerButton type="button" variant={variant}>
      <span>{title}</span>
      {icon}
    </ContainerButton>
  )
}
