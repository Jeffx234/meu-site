import {
  HeaderRight,
  HeaderLeft,
  HeaderContainer,
  ModalMenuMobileContainer,
  MenuModalContainer,
} from './styles'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { MenuHeader } from './Menu'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'

export function Header() {
  const { isOpen, handleClose, handleOpen } = useModal()

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h2>
          {' '}
          Jeff <span> -dev- </span>{' '}
        </h2>
      </HeaderLeft>
      <HeaderRight>
        <MenuHeader />
        <MenuModalContainer>
          <Modal isOpen={isOpen} onRequestClose={handleClose}>
            <ModalMenuMobile onClick={handleClose} />
          </Modal>
          <AiOutlineMenu size={25} onClick={handleOpen} />
        </MenuModalContainer>
      </HeaderRight>
    </HeaderContainer>
  )
}

function ModalMenuMobile({ onClick }) {
  return (
    <ModalMenuMobileContainer>
      <ul>
        <li>
          <Link href="/">
            <a onClick={onClick}>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a onClick={onClick}>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a onClick={onClick}>Serviços</a>
          </Link>
        </li>
        <li>
          <Link href="/certification">
            <a onClick={onClick}>Certificados</a>
          </Link>
        </li>
      </ul>
    </ModalMenuMobileContainer>
  )
}
