import type { AppProps } from 'next/app'

import Layout from '../components/layout'

import { GlobalStyled } from '../../styles/globals'
import { ChakraProvider } from '@chakra-ui/react'

import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'

import '../../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyled />

          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
