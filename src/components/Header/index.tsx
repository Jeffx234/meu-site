import { GiHamburgerMenu } from 'react-icons/gi';
import { Container } from "./styles";
import Link from 'next/link'
import { useState } from 'react';

interface Props {
  toggleTheme: () => void;
}

export function Header () {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  }


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
              <a> Contato </a>
            </Link>
          </li>


          <li>
            <Link href="https://github.com/">
              <a> Sobre </a>
            </Link>
          </li>


          <li>
            <Link href="https://github.com/">
              <a> Home </a>
            </Link>
          </li>
        </ul> 

        <div className="toggle">
            {
              openMenu ? (
                <GiHamburgerMenu size="30" onClick={handleToggleMenu} />
              ) : (
                <p>deletar</p>
              )
            }
        </div>
        {
          openMenu ? (
            <ul className="menu">
              <li>
                <Link href="">
                  <a> Inicio </a>
                </Link>
              </li>

              <li>
                <Link href="">
                  <a> Contato </a>
                </Link>
              </li>

              <li>
                <Link href="">
                  <a> Home </a>
                </Link>
              </li>

              <li>
                <Link href="">
                  <a> Sobre </a>
                </Link>
              </li>
            </ul>
          ) : null
        }
      </nav>
    </Container>
  )
}