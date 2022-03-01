import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getAllPosts, getPostContent, PostContent } from '../../lib/blog-api'
import BlogArticle from '../../components/BlogArticle'
import BlogLayout from '../../components/BlogLayout'
import PageHead from '../../components/PageHead'

interface PostParams extends ParsedUrlQuery {
  slug: string
}

interface PostProps {
  postContent: PostContent
  slug: string
}

const Post: NextPage<PostProps> = ({ postContent, slug }) => {
  return (
    <BlogLayout>
      <PageHead
        path={`/posts/${slug}`}
        description={postContent.metadata.excerpt}
        title={`${postContent.metadata.title} - Blog`}
      />
      <BlogArticle
        contents={postContent.htmlContent}
        metadata={postContent.metadata}
      />
    </BlogLayout>
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
      slug,
    },
  }
}
