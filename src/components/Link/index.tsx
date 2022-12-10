import { ReactNode } from 'react'
import { LinkContainer } from './styles'

interface LinkProps {
  to: string
  children: ReactNode
}

export default function Link({ to, children }: LinkProps) {
  return <LinkContainer to={to}>{children}</LinkContainer>
}
