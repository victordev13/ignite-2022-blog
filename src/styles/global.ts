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
    border-color: ${(props) => props.theme.colors.baseBorder};
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

  input {
    color: ${(props) => props.theme.colors.baseInput}
  }

  label {
    color: ${(props) => props.theme.colors.baseLabel}
  }

  /* baseTitle: '#e7edf4',
    baseSubtitle: '#c4d4e3',
    baseText: '#afc2d4',
    baseSpan: '#7b96b2',
    baseLabel: '#3a536b',
    baseBorder: '#1c2f41',
    basePost: '#112131',
    baseProfile: '#0b1b2b',
    baseBackground: '#071422',
    baseInput: '#040f1a', */
`
