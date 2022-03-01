import NextHeadSeo from 'next-head-seo'

export interface PageHeadProps {
  path: string
  description: string
  title?: string
  noTitleTemplate?: boolean
  noIndex?: boolean
  ogImagePath?: string
  ogType?: 'website' | 'article'
}

const PageHead: React.VFC<PageHeadProps> = (props) => {
  const {
    path,
    title,
    noTitleTemplate,
    description,
    noIndex,
    ogImagePath = '/josh.jpg',
    ogType = 'website',
  } = props

  const APP_ROOT_URL = process.env.NEXT_PUBLIC_APP_ROOT_URL
  const pageUrl = APP_ROOT_URL + path

  const defaultTitle = 'Josh Ward'
  const fullTitle = title
    ? noTitleTemplate
      ? title
      : `${title} - ${defaultTitle}`
    : defaultTitle

  return (
    <NextHeadSeo
      title={fullTitle}
      canonical={pageUrl}
      description={description}
      robots={noIndex ? 'noindex, nofollow' : undefined}
      og={{
        title: fullTitle,
        description,
        image: ogImagePath,
        siteName: 'Josh Ward',
        type: ogType,
        url: pageUrl,
      }}
    />
  )
}

export default PageHead
