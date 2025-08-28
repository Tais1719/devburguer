import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { useCart } from "../../hooks/CartContext";
import { FormatPrice } from "../../utils/formatPrice";

import { Container, EmptyCartContainer } from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // total de itens
  const deliveryTax = 500; // se for centavos, FormatPrice já cuida

  const navigate = useNavigate();
  const { cartProducts } = useCart();

  // Calcula total do valor e total de itens
  useEffect(() => {
    const totalValue = cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setFinalPrice(totalValue);

    const itemsCount = cartProducts.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalItems(itemsCount);
  }, [cartProducts]);

  const submitOrder = async () => {
    if (cartProducts.length === 0) return;

    const products = cartProducts.map(product => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price
    }));

    try {
      const { data } = await api.post("/create-payment_intent", { products });
      navigate("/checkout", { state: data });
    } catch (err) {
      toast.error("Erro ao processar pedido. Tente novamente!", {
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
  };
if (!cartProducts || cartProducts.length === 0) {
  return (
    <EmptyCartContainer>
      <div className="empty-icon">🛒</div>
      <h2 className="empty-title">Carrinho Vazio</h2>
      <p className="empty-message">
        Seu carrinho está vazio no momento.<br />
        Adicione alguns itens para continuar!
      </p>
    </EmptyCartContainer>
  );
}

// Aqui só entra se houver produtos
return (
  <Container>
    <div className="container-top">
      <h2 className="title">Total do seu Pedido</h2>
     <p className="items">
  Itens (<span className="items-count">{totalItems}</span>)
</p>

     <div className="delivery-container">
  <span className="delivery-tax">Taxa de Entrega:</span>
  <span className="delivery-tax-price">{FormatPrice(deliveryTax)}</span>
</div>

    </div>
    <div className="container-top" style={{ borderTop: "1px solid #ccc", marginTop: "10px", paddingTop: "10px", fontWeight: "600", }}>
      <p>Total</p>
      <p>{FormatPrice(finalPrice + deliveryTax)}</p>
    </div>
    <div className="container-button">
      <button onClick={submitOrder}>Finalizar Pedido</button>
    </div>
  </Container>
);

}
