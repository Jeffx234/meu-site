import Link from 'next/link'
import { Card } from './card'
import { AspectRatioDemo } from './radixImg'
import { Container, Content } from './styles'

export function Projetos() {
  return (
    <Container id="project">
      <h1 className="text-4xl text-center text-slate-100">Projetos</h1>
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
          alt="dtmoney"
          title="dtmoney"
          date="20 julho"
        />
        <Card
          src="/images/dtmoney.gif"
          alt="dtmoney"
          title="dtmoney"
          date="20 julho"
        />
      </Content>
    </Container>
  )
}
