import { useNavigate, useLocation } from 'react-router-dom'
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'
import { useUser } from '../../hooks/UserContent'
import {
  Container, HeaderLink, Options, Profile,
  LinkContainer, LogoutButton, Navigation, Content
} from './styles'
import { useCart } from '../../hooks/CartContext'

export function Header() {
  const navigate = useNavigate()
  const { logout, userInfo } = useUser()
  const { pathname } = useLocation()
  const { getCartQuantity } = useCart()
  const count = getCartQuantity()

  function logoutUser() {
    logout()
    navigate('/login')
  }

  return (
    <Container style={{ position: 'fixed', zIndex: 9999, top: 0 }}>
      <Content>
        <Navigation>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <HeaderLink to="/" $isActive={pathname === '/'}>Inicio</HeaderLink>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardapio</HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle color="#636262" size={24} />
            <div>
              <p>Olá, <span>{userInfo.name}</span></p>
              <LogoutButton onClick={logoutUser}>Sair</LogoutButton>
            </div>
          </Profile>

          <LinkContainer>
            <div style={{ position: 'relative' }}>
              <ShoppingCart color="#2b2b2d" size={24} />
              {count > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '10px',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {count}
                </span>
              )}
            </div>
            <HeaderLink to="/carrinho">Carrinho de compras</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}
