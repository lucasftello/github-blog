import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 8px;

  img {
    width: 9.25rem;
    border-radius: 8px;
    overflow: hidden;
  }
`

export const Infos = styled.div`
  flex: 1;

  p {
    line-height: 1.6;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Details = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  margin-top: 1.5rem;

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
