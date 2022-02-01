import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostContent, PostContent } from '../../lib/blog-api'
import Blog from '../../components/Blog'

interface PostParams extends ParsedUrlQuery {
  slug: string
}

interface PostProps {
  postContent: PostContent
}

const Post: React.VFC<PostProps> = ({ postContent }) => {
  return (
    <Blog contents={postContent.htmlContent} metadata={postContent.metadata} />
  )
}

export default Post

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getAllPosts()

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({
  params,
}) => {
  const slug = params?.slug
  if (!slug) {
    return {
      notFound: true,
    }
  }

  const postContent = await getPostContent(slug)

  return {
    props: {
      postContent,
    },
  }
}
