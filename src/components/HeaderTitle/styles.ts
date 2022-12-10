import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

export const Container = styled.div`
  margin-top: -88px;
  background-color: ${(props) => props.theme.colors.baseProfile};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  width: 70vw;
  margin-inline: auto;
  max-width: 864px;
`
export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`

export const Link = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: border-bottom 0.1s;
  border-bottom: 1px solid transparent;
  font-size: 0.75rem;

  &:hover {
    border-bottom-color: ${(props) => props.theme.colors.blue};
  }

  svg {
    margin-left: 8px;
  }
`
export const BackButton = styled(BaseLink)`
  position: absolute;
  left: 0;

  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: border-bottom 0.1s;
  border-bottom: 1px solid transparent;
  font-size: 0.75rem;

  &:hover {
    border-bottom-color: ${(props) => props.theme.colors.blue};
  }

  svg {
    margin-right: 6px;
  }
`

export const HeaderContent = styled.div``
export const HeaderFooter = styled.div``

export const FooterItem = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  text-transform: lowercase;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.baseSubtitle};

  svg {
    margin-right: 8px;
    color: ${(props) => props.theme.colors.baseLabel};
    margin-bottom: -5px;
  }
`
export const FooterItemLink = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  text-decoration: none;
  text-transform: lowercase;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.baseSubtitle};

  svg {
    margin-right: 8px;
    color: ${(props) => props.theme.colors.baseLabel};
  }

  :hover {
    color: ${(props) => props.theme.colors.baseTitle};
  }
`
