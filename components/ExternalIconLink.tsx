import clsx from 'clsx'

interface ExternalIconLinkProps {
  href: string
  className?: string
}

const ExternalIconLink: React.FC<ExternalIconLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      className={clsx('text-5xl hover:text-indigo-200', className)}
    >
      {children}
    </a>
  )
}

export default ExternalIconLink
