import { GetStaticProps, NextPage } from 'next'
import BlogHeroPreview from '../components/BlogHeroPreview'
import BlogLayout from '../components/BlogLayout'
import BlogPreview from '../components/BlogPreview'
import PageHead from '../components/PageHead'
import { getAllPosts, PostListDetails } from '../lib/blog-api'

interface BlogProps {
  blogs: PostListDetails[]
}

const Blog: NextPage<BlogProps> = ({ blogs }) => {
  const [first, ...rest] = blogs

  return (
    <BlogLayout>
      <PageHead
        path="/blog"
        description="The blog of Josh Ward, a software engineer"
        title="Blog"
      />
      <BlogHeroPreview {...first} />
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {rest.map((post) => (
            <BlogPreview {...post} key={post.slug} />
          ))}
        </div>
      )}
    </BlogLayout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const blogs = await getAllPosts()

  return {
    props: {
      blogs,
    },
  }
}
