import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostContent } from '../../lib/blog-api'

interface PostParams extends ParsedUrlQuery {
  slug: string
}

interface PostProps {
  text: string
}

const Post: React.VFC<PostProps> = (props) => {
  return <p>{props.text}</p>
}

export default Post

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getAllPosts()

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post,
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

  const text = await getPostContent(slug)

  return {
    props: {
      text,
    },
  }
}
