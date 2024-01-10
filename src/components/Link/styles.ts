import styled from 'styled-components'

export const LinkContainer = styled.a`
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
`
