import Link from 'next/link'
import { Card } from './card'
import { AspectRatioDemo } from './radixImg'
import { Container, Content } from './styles'

export function Projetos() {
  return (
    <Container id="project">
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
    </Container>
  )
}
