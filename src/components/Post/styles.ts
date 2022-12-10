import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.basePost};
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.2s;

  > div {
    position: relative;
  }

  :hover {
    border: 2px solid ${(props) => props.theme.colors.baseLabel};
  }

  span {
    color: ${(props) => props.theme.colors.baseTitle};
    font-weight: 700;
    font-size: 1.25rem;
  }

  > p {
    margin-top: 20px;
  }

  small {
    position: absolute;
    right: 0;
    top: 5px;
  }
`
