import styled from 'styled-components'
import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  background-image: url(${coverImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 4rem;

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`
