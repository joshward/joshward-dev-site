import { Metadata } from '../lib/blog-api'

interface BlogProps {
  metadata: Metadata
  contents: string
}

const BlogArticle: React.VFC<BlogProps> = ({ contents, metadata }) => {
  return (
    <article>
      <h2 className="text-4xl text-indigo-200">{metadata.title}</h2>
      <div
        className="
          prose
          text-slate-100
          max-w-none
        "
        dangerouslySetInnerHTML={{ __html: contents }}
      ></div>
    </article>
  )
}

export default BlogArticle
