import type { NextPage } from 'next'
import Header from '../components/Header'
import PageHead from '../components/PageHead'

const Home: NextPage = () => {
  return (
    <div>
      <PageHead
        path="/"
        description="Josh Ward is Software Engineer who constantly seeks to elevate the craft and build valuable software"
      />
      <Header />
    </div>
  )
}

export default Home
