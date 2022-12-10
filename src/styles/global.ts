import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background-color: ${(props) => props.theme.colors.baseBackground};
    color: ${(props) => props.theme.colors.baseText};
    -webkit-font-smoothing: antialised;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.baseTitle}
  }

  h2, h3, h4 {
    color: ${(props) => props.theme.colors.baseSubtitle}
  }

  span, a {
    color: ${(props) => props.theme.colors.baseSpan}
  }

  a {
    text-decoration: none;
  }

  input {
    color: ${(props) => props.theme.colors.baseInput}
  }

  label {
    color: ${(props) => props.theme.colors.baseLabel}
  }
`
