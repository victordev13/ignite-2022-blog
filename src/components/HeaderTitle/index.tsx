import { ReactElement, ReactNode } from 'react'
import {
  Container,
  HeaderContent,
  Header,
  Link,
  BackButton,
  FooterItem,
  FooterItemLink,
  FooterContainer,
} from './styles'
import { FaAngleLeft, FaExternalLinkAlt } from 'react-icons/fa'

function HeaderTitleRoot({
  children,
  fixedHeight,
}: {
  children: ReactNode
  fixedHeight?: number
}) {
  return <Container fixedHeight={fixedHeight}>{children}</Container>
}

interface HeaderTitleLinkProps {
  children: string
  to: string
  hideIcon?: boolean
}

function HeaderTitleLink({ children, to, hideIcon }: HeaderTitleLinkProps) {
  return (
    <Link href={to} rel="noreferrer" target="_blank">
      {children}
      {!hideIcon && <FaExternalLinkAlt />}
    </Link>
  )
}

function HeaderTitleContent({ children }: { children: ReactNode }) {
  return <HeaderContent>{children}</HeaderContent>
}

interface HeaderTitleHeaderProps {
  children: ReactNode
  showBackButton?: boolean
}

function HeaderTitleHeader({
  children,
  showBackButton = false,
}: HeaderTitleHeaderProps) {
  return (
    <Header>
      {showBackButton && (
        <BackButton to="/">
          <FaAngleLeft />
          Voltar
        </BackButton>
      )}
      {children}
    </Header>
  )
}

interface HeaderTitleFooterItemProps {
  children: string
  icon?: ReactElement
  linkTo?: string
}

function HeaderTitleFooterItem({
  children,
  linkTo,
  icon,
}: HeaderTitleFooterItemProps) {
  if (linkTo) {
    return (
      <FooterItemLink href={linkTo} rel="noreferrer" target="_blank">
        {icon}
        {children}
      </FooterItemLink>
    )
  }

  return (
    <FooterItem>
      {icon}
      {children}
    </FooterItem>
  )
}

function HeaderTitleFooter({ children }: { children: ReactNode }) {
  return <FooterContainer>{children}</FooterContainer>
}
export const HeaderTitle = {
  Root: HeaderTitleRoot,
  Link: HeaderTitleLink,
  Header: HeaderTitleHeader,
  Content: HeaderTitleContent,
  Footer: HeaderTitleFooter,
  FooterItem: HeaderTitleFooterItem,
}
