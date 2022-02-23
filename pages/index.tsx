import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Josh Ward</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
