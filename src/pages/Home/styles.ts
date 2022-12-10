import styled from 'styled-components'

export const HeaderContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  h1 {
    line-height: 3rem;
  }

  img {
    max-width: 148px;
    max-height: 148px;
    border-radius: 8px;
  }
`
export const HeaderContainerLinksContent = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`

export const ContentContainer = styled.div`
  padding: 4rem 0;
`

export const SearchBarContainer = styled.section`
  > div:first-child {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
  }

  input {
    width: 100%;
    padding: 12px 16px;
    background: ${(props) => props.theme.colors.baseInput};
    color: ${(props) => props.theme.colors.baseText};

    border: 1px solid ${(props) => props.theme.colors.baseBorder};
    border-radius: 6px;
    margin-top: 12px;
  }
`
export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.2rem;
  gap: 2rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
