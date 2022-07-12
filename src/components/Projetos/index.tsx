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
        <ScrollReveal>
          <div className="projeto">
            <div className="projeto-img">
             <AspectRatioDemo 
                img="/images/ignews.png"
                alt="Projeto 1"
                title="Projeto 1"
                descricao="Projeto 1"
                tecnologia="Projeto 1"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="projeto">
            <div className="projeto-img">
                <AspectRatioDemo 
                  img="/images/dtmoney.gif"
                  alt="Projeto 1"
                  title="Projeto 1"
                  descricao="Projeto 1"
                  tecnologia="Projeto 1"
                />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="projeto">
            <div className="projeto-img">
              <AspectRatioDemo 
                img="/images/ignews.png"
                alt="Projeto 1"
                title="Projeto 1"
                descricao="Projeto 1"
                tecnologia="Projeto 1"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="projeto">
            <div className="projeto-img">
              <AspectRatioDemo 
                img="/images/goRestaurant.png"
                alt="Projeto 1"
                title="Projeto 1"
                descricao="Projeto 1"
                tecnologia="Projeto 1"
              />
            </div>
          </div>
        </ScrollReveal>
      </Content>
    </Container>
  )
}