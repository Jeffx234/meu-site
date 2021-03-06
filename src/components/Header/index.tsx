import { GiHamburgerMenu } from 'react-icons/gi'
import { Container } from './styles'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Container>
      <nav>
        <h1> Portifólio </h1>

        <ul>
          <li>
            <Link href="#contact">
              <a> Contato </a>
            </Link>
          </li>

          <li>
            <Link href="#services">
              <a> Serviços </a>
            </Link>
          </li>

          <li>
            <Link href="#sobre">
              <a> Sobre </a>
            </Link>
          </li>

          <li>
            <Link href="#project">
              <a> Projetos </a>
            </Link>
          </li>
        </ul>

        <div className="toggle">
          {openMenu ? (
            <GiHamburgerMenu size="30" onClick={handleToggleMenu} />
          ) : (
            <GiHamburgerMenu size="30" onClick={handleToggleMenu} />
          )}
        </div>
        {openMenu ? (
          <ul className="menu">
            <li>
              <AiFillCloseCircle
                className="delete"
                onClick={handleToggleMenu}
              />
              <Link href="#contact">
                <a onClick={handleToggleMenu}> Contato </a>
              </Link>
            </li>

            <li>
              <Link href="#services">
                <a onClick={handleToggleMenu}> Serviços </a>
              </Link>
            </li>

            <li>
              <Link href="#sobre">
                <a onClick={handleToggleMenu}> Sobre </a>
              </Link>
            </li>

            <li>
              <Link href="#project">
                <a onClick={handleToggleMenu}> Projetos </a>
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </Container>
  )
}
