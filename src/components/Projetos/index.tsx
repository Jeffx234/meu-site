import { SubTitle } from '../../../styles/globals'
import { Card } from './card'
import { Container, Content } from './styles'

export function Projetos() {
  return (
    <Container id="project">
      <SubTitle>Projetos</SubTitle>
      <Content>
        <Card
          srcImage="/images/dtmoney.gif"
          alt="dtmoney"
          title="dtmoney"
          date="20 julho"
          name="Controle financeiro"
          src="https://github.com/Jeffx234/dtmoney-ignite"
        />
        <Card
          srcImage="/images/goRestaurant.png"
          alt="dtmoney"
          title="dtmoney"
          date="20 julho"
          name="Sistema de restaurante"
          src="https://github.com/Jeffx234/desafio-4-ignite-reactjs"
        />
        <Card
          srcImage="/images/ignews.png"
          alt="Ignews"
          title="Ignews"
          date="20 julho"
          name="Ignews - Notícias"
          src="https://github.com/Jeffx234/ignews"
        />
      </Content>
    </Container>
  )
}
