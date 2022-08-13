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
        <h2> Jeferson Luis | Dev </h2>
      </HeaderLeft>
      <HeaderRight>
        <MenuHeader />
        <MenuModalContainer>
          <Modal isOpen={isOpen} onRequestClose={handleClose}>
            <ModalMenuMobile />
          </Modal>
          <AiOutlineMenu size={25} onClick={handleOpen} />
        </MenuModalContainer>
      </HeaderRight>
    </HeaderContainer>
  )
}

function ModalMenuMobile() {
  return (
    <ModalMenuMobileContainer>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </ModalMenuMobileContainer>
  )
}
