import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import {
  Container,
  Description,
  Heading,
  Name,
  SubTitle,
  ContainerButton,
} from './styles'

export function Title() {
  return (
    <Container id="contact">
      <Name className="absolute">
        <div className="rocket">
          <Heading>
            <span>Jeferson Luis</span>
          </Heading>
        </div>

        <SubTitle>
          Desenvolvedor Front-end <span> Health mobile </span>
        </SubTitle>
        <Description>
          <p>
            Meu nome é Jeferson Luis, sou um desenvolvedor front-end e
            desenvolvo soluções para aplicações web e mobile.
          </p>
        </Description>
        <ContainerButton>
          <a
            href="https://www.linkedin.com/in/jefersonluisx/"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            Linkedin
            <AiFillLinkedin size="20" />
          </a>

          <a
            href="https://www.github.com/jeffx234"
            target="_blank"
            className="icons"
            rel="noreferrer"
          >
            Github
            <AiFillGithub size="20" />
          </a>
        </ContainerButton>
      </Name>
      <div className="image">
        <img src="/images/logger.png" alt="Foto logo" />
      </div>
    </Container>
  )
}
