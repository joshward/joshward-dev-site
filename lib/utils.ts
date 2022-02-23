import parse from 'date-fns/parse'

export function stringifyError(error: unknown): string {
  return error instanceof Error ? error.message : `${error}`
}

export function getBlogLink(slug: string): string {
  return `posts/${slug}`
}

export function parseDate(date: string): Date {
  return parse(date, 'M/d/yy', new Date())
}

export function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime())
}
