import Image from 'next/image'
import JoshImage from '../assets/josh.jpg'
import EmailIcon from '../assets/email.svg'
import GitHubIcon from '../assets/logo-github.svg'
import LinkedInIcon from '../assets/logo-linkedin.svg'
import ExternalIconLink from './ExternalIconLink'

const Header: React.VFC = () => {
  return (
    <div
      className="
        w-full
        min-h-screen
        p-12
        flex
        flex-col
        justify-around
        space-y-2
      "
    >
      <div className="flex md:space-x-8 items-center justify-center flex-col md:flex-row">
        <div>
          <p className="text-2xl">Hey! I&apos;m</p>
          <h1
            className="
            text-5xl md:text-7xl
            py-1
            font-semibold
            text-indigo-100
          "
          >
            Josh <span className="text-indigo-200">Ward</span>
          </h1>
          <p className="text-2xl">
            a <span className="text-indigo-400">Software Engineer</span> who
            constantly seeks to elevate the craft and build valuable software.
          </p>
          <p className="pt-2 text-2xl">
            I&apos;m also a{' '}
            <a
              href="https://games.joshward.dev"
              className="text-indigo-300 hover:text-indigo-400 border-b border-dashed border-indigo-300 hover:border-indigo-400"
            >
              board game addict
            </a>
            , <span className="text-indigo-200">beer enthusiast</span>, and{' '}
            <span className="text-indigo-100">practiced air drummer</span>.
          </p>
          <p className="pt-2 text-2xl">
            I live in the great{' '}
            <span className="text-indigo-300">Pacific North West</span> with my{' '}
            <span className="text-indigo-200">amazing wife</span>,{' '}
            <span className="text-indigo-100">3 kids</span> and{' '}
            <span className="text-indigo-100">3 guinea pigs</span>.
          </p>
        </div>

        <div className="w-full md:1/3 lg:w-1/4 max-w-sm px-5 md:px-0 py-5 md:py-0">
          <Image
            src={JoshImage}
            alt="Picture of Josh"
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="self-center">
        <div className="flex justify-center space-x-4">
          <ExternalIconLink
            href="mailto:contact@joshward.dev"
            title="Josh's Contact Email"
          >
            <EmailIcon aria-label="email icon" />
          </ExternalIconLink>

          <ExternalIconLink
            href="https://www.linkedin.com/in/joshwarddev"
            title="Josh's LinkedIn"
          >
            <LinkedInIcon aria-label="LinkedIn icon" />
          </ExternalIconLink>

          <ExternalIconLink
            href="https://github.com/joshward"
            title="Josh's Github"
          >
            <GitHubIcon aria-label="Github icon" />
          </ExternalIconLink>
        </div>

        <div className="pt-5">
          <a
            className="text-indigo-300 hover:text-indigo-400 border-b border-dashed border-indigo-300 hover:border-indigo-400"
            href="https://intellitect.com/employee-spotlight-josh-ward/"
          >
            Employee Spotlight Article
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
