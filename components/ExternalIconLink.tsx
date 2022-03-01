import clsx from 'clsx'

interface ExternalIconLinkProps {
  href: string
  title: string
  className?: string
}

const ExternalIconLink: React.FC<ExternalIconLinkProps> = ({
  href,
  className,
  title,
  children,
}) => {
  return (
    <a
      aria-label={`Link to ${title}`}
      title={title}
      href={href}
      className={clsx('text-5xl hover:text-indigo-200', className)}
    >
      {children}
    </a>
  )
}

export default ExternalIconLink
