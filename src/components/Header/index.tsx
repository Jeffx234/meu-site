import { GiHamburgerMenu } from 'react-icons/gi';
import { Container } from "./styles";
import Link from 'next/link'

interface Props {
  toggleTheme: () => void;
}

export function Header () {

  return(
    <Container>
      <nav>
        <h1> Portifólio </h1>
        <ul>
          <li>
            <Link href="https://github.com/">
              <a> Home </a>
            </Link>
          </li>

          <li>
            <Link href="https://github.com/">
              <a> Contact </a>
            </Link>
          </li>


          <li>
            <Link href="https://github.com/">
              <a> About </a>
            </Link>
          </li>


          <li>
            <Link href="https://github.com/">
              <a> Home </a>
            </Link>
          </li>

      
        </ul> 

        <div className="toggle">
            <GiHamburgerMenu size="30" />
        </div>
   
      </nav>
    </Container>
  )
}