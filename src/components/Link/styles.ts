import styled from 'styled-components'
import { Link as ReactRouterDomLink } from 'react-router-dom'

export const LinkContainer = styled(ReactRouterDomLink)`
  color: ${(props) => props.theme.colors.blue};
`
