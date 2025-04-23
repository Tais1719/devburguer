import Cart from '../../assets/cart.svg'
import { ContainerButton } from './styles'
export function CardButton ({...props}){

    return(
        <div>
         <ContainerButton {...props}>
            <img src={Cart} alt='carrinhos de compras'/>
         </ContainerButton>
        </div>
    )

}