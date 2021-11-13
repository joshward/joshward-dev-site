const Header: React.VFC = () => {
  return (
    <div
      className="
        w-full
        p-12
        dark:bg-black
        flex flex-col justify-center
      "
    >
      <div>
        <p className="text-2xl">Hey! I&apos;m</p>
        <h1
          className="
            text-7xl
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
          <span className="text-indigo-300">board game addict</span>,{' '}
          <span className="text-indigo-200">beer enthusiast</span>, and{' '}
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
    </div>
  )
}

export default Header
