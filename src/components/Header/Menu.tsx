import Link from 'next/link'
import { MenuHeaderNav } from './styles'

export const MenuLists = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Contact',
    link: '/contact',
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
