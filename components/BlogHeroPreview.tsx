import Link from 'next/link'
import { PostListDetails } from '../lib/blog-api'
import { getBlogLink } from '../lib/utils'

const BlogHeroPreview: React.VFC<PostListDetails> = ({
  title,
  publishedDate,
  excerpt,
  slug,
}) => {
  return (
    <Link href={getBlogLink(slug)}>
      <a className="group">
        <div className="border border-solid border-slate-600 rounded p-5 group-hover:bg-slate-600">
          <h2 className="text-indigo-200 text-4xl pb-1">{title}</h2>
          <h3 className="text-indigo-400 text-sm pb-5">{publishedDate}</h3>
          <p className="text-indigo-100">{excerpt}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogHeroPreview
