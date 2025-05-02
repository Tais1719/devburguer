
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import {api } from "../../services/api";
import {useCart} from "../../hooks/CartContext";
import {FormatPrice} from "../../utils/formatPrice";

import { Button } from "../../Button";
import { Container } from "./styles";


export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500)

  const navigate = useNavigate()
  const {cartProducts, clearCart} = useCart()

  useEffect(()=>{
    const sumaAllItems = cartProducts.reduce((acc, current) =>{ 
      return current.price * current.quantity +acc
     }, 0  )
       setFinalPrice(sumaAllItems)
  },[cartProducts] )

  const submitOrder = async () =>{ 
    const products = cartProducts.map((product) =>{ 
      return { 
        id: product.id, 
        quantity: product.quantity,
        price: product.price}
    })


    try{ 
      const  { data } = await api.post('/create-payment_intent', { products })



      navigate('/checkout', {
        state: data,
      })
      

    } catch(err){ 

      toast.error('error tente novamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


     }

   }



    
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">itens</p>
          <p className="items-price">{FormatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
      
          <p className="delivery-tax-price">{FormatPrice( deliveryTax)}</p>

        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{FormatPrice(finalPrice + deliveryTax)} </p>
        </div>
      </Container>
      <Button onClick ={submitOrder} >Finalizar Pedido</Button>
      </div>
  );
}
