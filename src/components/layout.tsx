import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type IProps = {
  children: ReactNode
}

export default function Layout({ children }: IProps) {
  /* const [theme, setTheme] = useState('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  } */

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
