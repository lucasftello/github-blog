import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
