import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div
      className="
        bg-gray-800
        text-gray-50
        min-h-screen
      "
    >
      <Head>
        <title>Josh Ward</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
