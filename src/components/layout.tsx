import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type IProps = {
  children: ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
