import { FC } from 'react'
import Link, { LinkProps } from 'next/link'
import { cn } from '@myorg/ui'

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href, className, ...props }) => {
  return (
    <Link
      href={href}
      className={cn(className)}
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      {children}
    </Link>
  )
}
