import { SubTitle } from '../../../styles/globals'
import { IconName } from './Icons'
import { Container, Foto, SobreMim, Content } from './styles'

export function Sobre() {
  return (
    <Container id="sobre">
      <SubTitle>Sobre mim</SubTitle>
      <Content>
        <Foto>
          <img src="/images/profile.jpg" alt="Foto jeferson" />
        </Foto>
        <SobreMim>
          <h2> Rio de Janeiro, Brasil</h2>
          <p>
            Meu nome é Jeferson Luis, tenho 27 anos e sou um desenvolvedor
            front-end. Estou cursando Análise e desenvolvimento de sistemas na
            Universidade Estácio de Sá. Atualmente estou trabalhando como
            desenvolvedor front-end na Healh mobile. Apaixonado por tecnologia e
            por desenvolver soluções que possam ajudar a vida das pessoas.
          </p>
          <IconName />
        </SobreMim>
      </Content>
    </Container>
  )
}
