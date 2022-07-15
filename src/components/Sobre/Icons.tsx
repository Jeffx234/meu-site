import Link from 'next/link'
import {
  AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp
} from 'react-icons/ai'
import { Icon } from './styles'



export function IconName() {
  return(
    <Icon>
      <div className="item">
        <Link href="https://github.com/Jeffx234">
         <a className="flex items-center flex-col">
            <AiFillGithub size={30}/>
            <p> Github </p>
          </a>
        </Link>
      </div>

      <div className="item">
        <Link href="https://www.instagram.com/jefersonluis91/">
          <a className="flex items-center flex-col">
            <AiOutlineInstagram size={30} />
            <p> Instagram </p>
          </a>
        </Link>
      </div>

      <div className="item">
        <Link href="https://www.linkedin.com/in/jefersonluisx/">
          <a className="flex items-center flex-col">
            <AiFillLinkedin size={30} />
            <p> Linkedin </p>
          </a>
        </Link>
      </div>

      <div className="item">
        <Link href="https://api.whatsapp.com/send?phone=5521966591901">
          <a className="flex items-center flex-col">
            <AiOutlineWhatsApp size={30} />
            <p> Whatszap </p>
          </a>
        </Link>
      </div>

      <div className="item">
        <Link href="jefersonluisx@hotmail.com" >
          <a className="flex items-center flex-col">
            <AiOutlineMail size={30} />
            <p> Email </p>
          </a>
        </Link>
      </div>
    </Icon>
  )
}
