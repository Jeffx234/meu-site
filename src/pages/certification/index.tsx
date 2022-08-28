import {
  Container,
  Content,
  ContentItem,
} from '../../../styles/styledcertification'

export default function Certification() {
  return (
    <Container>
      <h1>Certificados</h1>
      <Content>
        <ContentItem>
          <img src="/cert/Ignite.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>
            React, Nextjs, Chakra-ui, TypeScript, Javascript, HTML, CSS, Styled
            Components, Redux, Context API, React-hooks.
          </p>
        </ContentItem>
        <ContentItem>
          <img src="/cert/Edduz.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS, Styled Components, Redux, Context API, React-hooks.
          </p>
        </ContentItem>
        <ContentItem>
          <img src="/cert/inter.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS.
          </p>
        </ContentItem>
        <ContentItem>
          <img src="/cert/mrv.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>
            React, TypeScript, Javascript, HTML, CSS, Styled Components, .NET,
            #C, Sql server
          </p>
        </ContentItem>
        <ContentItem>
          <img src="/cert/takblip.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS, Styled Components,
          </p>
        </ContentItem>
        <ContentItem>
          <img src="/cert/decolatech.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>.NET, #C, Sql server, C#, Javascript, HTML, CSS</p>
        </ContentItem>
        <ContentItem>
          <img src="/cert/freecodecamp.jpg" alt="Certificados bootcamp Edduz" />
          <h2>Linguagens usadas</h2>
          <p>.Javascript básico ao avançado</p>
        </ContentItem>
      </Content>
    </Container>
  )
}
