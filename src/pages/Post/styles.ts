import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 60rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

export const PostInfo = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 8px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const Details = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const PostContent = styled.div`
  margin-top: 2.5rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.blue};
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  pre {
    margin: 1.875rem 0;
    padding: 1.25rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 2px;
  }
`
