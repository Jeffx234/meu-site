
import { BsArrowDownCircle } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Button } from '../../components/Button';
import { Container, Name } from './styles';
import Link from 'next/link';
import Image from 'next/image';


export function Title ()  {

  return (
    <Container>
      <Name className="absolute">
        <div className="helloworld">
          <img src="/images/Hi.gif" />
          <p> Hello world! </p>
        </div>
        <p> Olá, Eu sou </p>
        <div className="rocket">
          <h1> Jeferson Luis</h1>
        </div>

        <p className="position"> Desenvolvedor Front-end <span> Health Mobile</span> </p>
        <div className="buttons">
            <a href="https://www.linkedin.com/in/jefersonluisx/" target="_blank" rel="noreferrer" className="icons">
              Linkedin
              <AiFillLinkedin size="20"/> 
            </a>
          
            <a href="https://www.github.com/jeffx234" target="_blank" className="icons" rel="noreferrer">
              Github
              <AiFillGithub size="20" /> 
            </a>
        </div>
      </Name>
      <div className="image">
        <img src="/images/logger.png" alt="Foto logo"  />
      </div>
    </Container>
  )
}

