const Header: React.VFC = () => {
  return (
    <div
      className="
        w-full h-64
        p-12
        dark:bg-black
        flex flex-col items-center justify-around md:flex-row
      "
    >
      <h1
        className="
          text-7xl
          font-semibold
          font-sans
        "
      >
        Josh Ward
      </h1>

      <ul>
        <li>Software Engineer</li>
        <li>Board Game Addict</li>
      </ul>
    </div>
  )
}

export default Header
