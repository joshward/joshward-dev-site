import { Metadata } from '../lib/blog-api'

interface BlogProps {
  metadata: Metadata
  contents: string
}

const Blog: React.VFC<BlogProps> = ({ contents, metadata }) => {
  return (
    <article>
      <h1 className="text-4xl">{metadata.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: contents }}
      ></div>
    </article>
  )
}

export default Blog
