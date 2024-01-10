import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 60rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Posts = styled.div`
  margin-top: 4.5rem;
`

export const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:nth-child(1) {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span:nth-child(2) {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostsSearchForm = styled.form`
  margin-top: 0.75rem;

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: ${(props) => props.theme.blue} solid 1px;
      transition: outline 0.2s;
    }
  }
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
`
