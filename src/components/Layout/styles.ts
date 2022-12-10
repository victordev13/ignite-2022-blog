import styled from 'styled-components'

export const MainContainer = styled.main``
export const Content = styled.div`
  max-width: 864px;
  margin: 0 auto;
  margin-top: 296px;
`
export const HeaderBackground = styled.div`
  z-index: -1;
  background-image: url('/Cover.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 296px;
  object-fit: cover;

  position: absolute;
  top: 0;

  div {
    text-align: center;
    margin-top: 120px;
  }

  h1 {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.blue};
    text-shadow: 0px 0.5px 5px ${(props) => props.theme.colors.blue}80;
  }
`
