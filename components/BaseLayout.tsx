import Head from 'next/head'

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div
      className="
        font-mono
        selection:bg-indigo-300 selection:text-gray-800
      "
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {children}
    </div>
  )
}

export default BaseLayout
