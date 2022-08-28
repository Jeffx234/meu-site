import Link from 'next/link'
import { MenuHeaderNav } from './styles'

export const MenuLists = [
  {
    title: 'Inicio',
    link: '/',
  },
  {
    title: 'Sobre',
    link: '#about',
  },
  {
    title: 'Serviços',
    link: '#services',
  },
  {
    title: 'Certificados',
    link: '/certification',
  },
]

export function MenuHeader() {
  return (
    <MenuHeaderNav>
      <ul>
        <li>
          {MenuLists.map((item) => (
            <>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </>
          ))}
        </li>
      </ul>
    </MenuHeaderNav>
  )
}
