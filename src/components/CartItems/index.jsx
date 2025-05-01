import { Table } from '../index'
import { useCart } from '../../hooks/CartContext';
import TrashIcon from '../../assets/trash.svg'
import { FormatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmtyCart,ProductImage, ProductTotalPrice, TrashImage,} from './styles';


export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart()

    console.log(cartProducts)
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage img src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.CurrencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={()=> decreaseProduct(product.id)}>-</button>
                                    
                                {product.quantity}
                                <button onClick={()=> increaseProduct(product.id)}>+</button>
                                </ButtonGroup>
                                </Table.Td>
                                
                            <Table.Td>
                                <ProductTotalPrice>
                            {FormatPrice(product.quantity * product.price)}
                            </ProductTotalPrice>

                            </Table.Td>
                            <Table.Td>
                                <TrashImage
                                 src = {TrashIcon}
                                  alt ="lixeira" 
                                  onClick = {() => deleteProduct(product.id)} />
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmtyCart>Carrinho vazio</EmtyCart>}
            </Table.Body>

        </Table.Root>
    )

}  
