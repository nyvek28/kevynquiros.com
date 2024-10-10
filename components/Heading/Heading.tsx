import { PropsWithChildren } from "react"
import clsx from "clsx"

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends PropsWithChildren {
  as?: HeadingTag
  className?: string
}

export default function Heading({ children, as = 'h1', className }: HeadingProps) {
  const Component = as

  return <Component className={clsx(className)} >{children}</Component>
}