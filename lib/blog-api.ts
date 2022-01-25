import path from 'path'
import fs from 'fs/promises'
import { micromark } from 'micromark'

const fileExtension = '.md'
const postsDirectory = path.join(process.cwd(), '_posts')

export async function getAllPosts(): Promise<string[]> {
  const files = await fs.readdir(postsDirectory)

  return files
    .filter((file) => path.extname(file) === fileExtension)
    .map((file) => file.slice(0, -fileExtension.length))
}

export async function getPostContent(slug: string): Promise<string> {
  const context = await fs.readFile(
    path.join(postsDirectory, `${slug}${fileExtension}`)
  )

  const markdown = context.toString('utf8')
  return micromark(markdown)
}
