import { CartItems, CartResume } from '../../components'
import { Container, Title, Content } from './styles'
import { useCart } from '../../hooks/CartContext'

export function Cart() {
  const { cartProducts } = useCart();

  const hasProducts = cartProducts && cartProducts.length > 0;

  return (
    <Container>
      {hasProducts && <Title>Resumo do seu pedido</Title>} {/* só aparece se houver produtos */}
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  )
}
