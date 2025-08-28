import Cart from '../../assets/cart.svg'
import { ContainerButton } from './styles'
export function CardButton ({...props}){

    return(
    
         <ContainerButton {...props}>
          
         Adicionar ao carrinho
         </ContainerButton>
     
    )

}
