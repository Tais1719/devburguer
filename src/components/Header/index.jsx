// src/components/Header.jsx
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { UserCircle, ShoppingCart, MagnifyingGlass } from '@phosphor-icons/react'
import { useUser } from '../../hooks/UserContent'
import {
  Container, HeaderLink, SearchForm, Options, Profile,
  LinkContainer, LogoutButton, Navigation, Content
} from './styles'
import { useCart } from '../../hooks/CartContext'

export function Header() {
  const navigate = useNavigate()
  const { logout, userInfo } = useUser()
  const { pathname } = useLocation()
  const { getCartQuantity } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const count = getCartQuantity()

  function logoutUser() {
    logout()
    navigate('/login')
  }

  return (
    <Container style={{ position: 'fixed', zIndex: 9999, top:0}}>
      <Content> 
        <Navigation>
            <div>
          <HeaderLink to="/" $isActive={pathname === '/'}>Inicio</HeaderLink>
          <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Todos</HeaderLink>
          </div>
        </Navigation>
                 
        <Options>
          
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>Olá, <span>{userInfo.name}</span></p>
              <LogoutButton onClick={logoutUser}>Sair</LogoutButton>
            </div>
          </Profile>

          <SearchForm
            onSubmit={(e) => {
              e.preventDefault()
              if (!searchTerm.trim()) return
              navigate(`/buscar?query=${encodeURIComponent(searchTerm.trim())}`)
            }}
          >
            <MagnifyingGlass size={18} />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchForm>

          <LinkContainer>
            <div style={{ position: 'relative' }}>
              <ShoppingCart color="#fff" size={24} />
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
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}
