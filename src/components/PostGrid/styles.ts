import styled from 'styled-components'

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
