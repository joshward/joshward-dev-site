import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div
      className="
        font-mono
        bg-gray-800
        text-gray-50
        min-h-screen
      "
    >
      <Header />
    </div>
  )
}

export default Home
