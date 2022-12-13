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
