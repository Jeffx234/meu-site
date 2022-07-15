import { Hr } from "../../styles/globals";
import { Projetos } from "./Projetos";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Sobre } from "./Sobre";
import { Title } from "./Title";

export function Dashboard() {
  return(
    <div className="container">
      <a href="https://api.whatsapp.com/send?phone=5521966591901" target="_blank" rel="noreferrer">
        <img src="/images/logo-whats.png" alt="icone-whatszap"
          className="fixed top-90 bottom-4 z-10 right-4 rounded-full w-14 h-14" 
        />
      </a>  
        <Title />
          <Hr />
        <Sobre />
          <Hr />
        <Projetos/>
          <Hr />
        <Services/>
          <Hr/>
        <Skills/>
    </div> 
  )
}