import { Hr } from "../../styles/globals";
import { Projetos } from "./Projetos";
import { Skills } from "./Skills";
import { Sobre } from "./Sobre";
import { Title } from "./Title";

export function Dashboard() {
  return(
    <div className="container">
      <a href="https://api.whatsapp.com/send?phone=5521966591901" target="_blank" rel="noreferrer">
        <img src="/images/logo-whats.png" alt="icone-whatszap" 
            style={{
              position: 'fixed',
              width: '4%',
              top: '90%',
              bottom: '1rem',
              zIndex: '1',
              right: '1rem'
            }}
          />
      </a>  
        <Title />
        <Sobre />
        <Projetos/>
        <Hr/>
        <Skills/>
    </div> 
  )
}