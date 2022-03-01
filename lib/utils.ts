import parse from 'date-fns/parse'
import format from 'date-fns/format'

export function stringifyError(error: unknown): string {
  return error instanceof Error ? error.message : `${error}`
}

export function getBlogLink(slug: string): string {
  return `/posts/${slug}`
}

export function parseDate(date: string): Date {
  return parse(date, 'M/d/yy', new Date())
}

export function formatDate(date: string): string {
  const parsed = parseDate(date)
  return format(parsed, 'PP')
}

export function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime())
}
