import styled from 'styled-components'

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
    transition: box-shadow 0.2s;
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    text-decoration: none;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PostHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  h1 {
    flex: 1;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
