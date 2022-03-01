import Link from 'next/link'
import DocumentsIcon from '../assets/documents.svg'
import HomeIcon from '../assets/home.svg'

const BlogLayout: React.FC = ({ children }) => {
  return (
    <div
      className="
        p-5 md:p-10
        md:container
        md:mx-auto
        lg:max-w-screen-md
      "
    >
      <div
        className="
          flex
          flex-col-reverse
          md:flex-row
          justify-between
          items-baseline
          pb-5
          border-b
          border-slate-600
          mb-5
        "
      >
        <h1
          className="
          text-indigo-100 hover:text-indigo-200
            text-4xl
            md:text-5xl
          "
        >
          <Link href="/blog">
            <a>Josh&apos;s Blog</a>
          </Link>
        </h1>

        <div className="space-x-4 py-2 md:py-0">
          <Link href="/blog">
            <a className="inline-flex items-baseline space-x-1 hover:text-indigo-200">
              <DocumentsIcon />
              <span>All Articles</span>
            </a>
          </Link>
          <Link href="/">
            <a className="inline-flex items-baseline space-x-1 hover:text-indigo-200">
              <HomeIcon />
              <span>Home</span>
            </a>
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default BlogLayout
