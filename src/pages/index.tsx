import { Dashboard } from '../components/Dashboard'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeferson Luis</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </>
  )
}
