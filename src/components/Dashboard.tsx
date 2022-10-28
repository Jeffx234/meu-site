import { Hr } from '../../styles/globals'
import { Projetos } from './Projetos'
import ScrollReveal from './Scrollreveal'
import { Services } from './Services'
import { Skills } from './Skills'
import { Sobre } from './Sobre'
import { Title } from './Title'
import { Divider } from '@chakra-ui/react'

export function Dashboard() {
  return (
    <div className="container">
      <a
        href="https://api.whatsapp.com/send?phone=5521966591901"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/logo-whats.png"
          alt="icone-whatszap"
          className="fixed top-90 bottom-4 z-10 right-4 rounded-full w-14 h-14"
        />
      </a>
      <ScrollReveal>
        <Title />
      </ScrollReveal>
      <ScrollReveal>
        <Sobre />
      </ScrollReveal>
      <ScrollReveal>
        <Projetos />
      </ScrollReveal>
      <Divider />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
    </div>
  )
}
