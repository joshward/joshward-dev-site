interface BlogProps {
  contents: string
}

const Blog: React.VFC<BlogProps> = ({ contents }) => {
  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: contents }}></div>
  )
}

export default Blog
