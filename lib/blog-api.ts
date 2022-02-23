import path from 'path'
import fs from 'fs/promises'
import { micromark } from 'micromark'
import matter from 'gray-matter'
import { isValidDate, parseDate, stringifyError } from './utils'
import compareDesc from 'date-fns/compareDesc'

export interface Metadata {
  title: string
  publishedDate: string
  excerpt: string
}

export interface PostListDetails extends Metadata {
  slug: string
}

export interface PostContent {
  htmlContent: string
  metadata: Metadata
}

const fileExtension = '.md'
const postsDirectory = path.join(process.cwd(), '_posts')

function parseMetadata(rawMetadata: Record<string, unknown>): Metadata {
  const title = rawMetadata.title
  if (!title || typeof title !== 'string') {
    throw new Error('Error parsing title')
  }

  const publishedDate = rawMetadata.publishedDate
  if (
    !publishedDate ||
    typeof publishedDate !== 'string' ||
    !isValidDate(parseDate(publishedDate))
  ) {
    throw new Error('Error parsing date')
  }

  const excerpt = rawMetadata.excerpt
  if (!excerpt || typeof excerpt !== 'string') {
    throw new Error('Error parsing excerpt')
  }

  return {
    title,
    publishedDate,
    excerpt,
  }
}

async function getMatterData(
  slug: string
): Promise<matter.GrayMatterFile<string>> {
  const context = await fs.readFile(
    path.join(postsDirectory, `${slug}${fileExtension}`)
  )

  const markdown = context.toString('utf8')

  try {
    return matter(markdown)
  } catch (error) {
    throw new Error(
      `Failed to parse front matter for ${slug}: ${stringifyError(error)}`
    )
  }
}

export async function getAllPosts(): Promise<PostListDetails[]> {
  const files = await fs.readdir(postsDirectory)

  const slugs = files
    .filter((file) => path.extname(file) === fileExtension)
    .map((file) => file.slice(0, -fileExtension.length))

  const details: PostListDetails[] = []
  for (const slug of slugs) {
    const matterData = await getMatterData(slug)
    try {
      const metadata = parseMetadata(matterData.data)
      details.push({
        ...metadata,
        slug,
      })
    } catch (error) {
      throw new Error(
        `Failed to get post content for ${slug}: ${stringifyError(error)}`
      )
    }
  }

  return details.sort((a, b) =>
    compareDesc(parseDate(a.publishedDate), parseDate(b.publishedDate))
  )
}

export async function getPostContent(slug: string): Promise<PostContent> {
  const matterData = await getMatterData(slug)

  let metadata: Metadata
  try {
    metadata = parseMetadata(matterData.data)
  } catch (error) {
    throw new Error(
      `Failed to get post content for ${slug}: ${stringifyError(error)}`
    )
  }

  let htmlContent: string
  try {
    htmlContent = micromark(matterData.content)
  } catch (error) {
    throw new Error(
      `Failed to get parse post body for ${slug}: ${stringifyError(error)}`
    )
  }

  return { htmlContent, metadata }
}
