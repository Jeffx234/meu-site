import { IconName } from './Icons'
import { Container, Foto, SobreMim, Content } from './styles'

export function Sobre() {
  return (
    <Container id="sobre">
      <h1 className="text-4xl mb-8 text-slate-100"> Sobre mim</h1>
      <Content>
        <Foto>
          <img src="/images/profile.jpg" alt="Foto jeferson" />
        </Foto>
        <SobreMim>
          <h2> Rio de Janeiro, Brasil</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum
            eum labore commodi reprehenderit, minima ducimus earum omnis sequi,
            animi, quam facilis deleniti eos amet? Molestias, eligendi. Tenetur,
            iusto soluta?
          </p>
          <IconName />
        </SobreMim>
      </Content>
    </Container>
  )
}
