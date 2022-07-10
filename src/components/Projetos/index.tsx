import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import ScrollReveal from '../ScrollReveal';
import { AspectRatioDemo } from './radixImg';
import { Container, Content } from "./styles";


export function Projetos() {
  return (
    <Container>
      <h1 className="proj"> <span> &lt; </span>  Projetos <span> &gt;</span> </h1>
      <Content>
        <div className="cards">
          <AspectRatioDemo 
              img="/images/ignews.png" alt="Projeto ignews"
              title="Projeto ignews"
              descricao="Ignews é um uma plataforma de pagamento"
              tecnologia="Tecnologias usadas"
            />

            <AspectRatioDemo 
              img="/images/ignews.png" alt="Projeto ignews"
              title="Projeto ignews"
              descricao="Ignews é um uma plataforma de pagamento"
              tecnologia="Tecnologias usadas"
            />
        </div>
        <div className="cards">
          <AspectRatioDemo 
              img="/images/ignews.png" alt="Projeto ignews"
              title="Projeto ignews"
              descricao="Ignews é um uma plataforma de pagamento"
              tecnologia="Tecnologias usadas"
            />
            <AspectRatioDemo 
              img="/images/ignews.png" alt="Projeto ignews"
              title="Projeto ignews"
              descricao="Ignews é um uma plataforma de pagamento"
              tecnologia="Tecnologias usadas"
            />
        </div>
      </Content>
    </Container>
  )
}