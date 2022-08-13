import { SubTitle } from '../../../styles/globals'
import { Card } from './card'
import { Container, Content } from './styles'

export function Projetos() {
  return (
    <Container id="project">
      <SubTitle>Projetos</SubTitle>
      <Content>
        <Card
          src="/images/dtmoney.gif"
          alt="dtmoney"
          title="dtmoney"
          date="20 julho"
        />
        <Card
          src="/images/goRestaurant.png"
          alt="dtmoney"
          title="dtmoney"
          date="20 julho"
        />
        <Card
          src="/images/ignews.png"
          alt="Ignews"
          title="Ignews"
          date="20 julho"
        />
      </Content>
    </Container>
  )
}
