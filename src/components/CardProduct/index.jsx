import PropTypes from "prop-types";
import { CardImage, Container } from "./styles";
import { useCart } from '../../hooks/CartContext';
import { CardButton } from "../CardButton";
import { useNavigate } from 'react-router-dom';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/produto/${product.id}`);
  };

  const getFormattedPrice = () => {
    // Se já tiver CurrencyValue, usa direto
    if (product.CurrencyValue) {
      return product.CurrencyValue;
    }

    if (product.price !== undefined) {
      // Converte string para número, se necessário
      let numericPrice =
        typeof product.price === "string"
          ? Number(product.price.replace(",", "."))
          : Number(product.price);

      // Assumindo backend envia preços em centavos: divide sempre por 100
      numericPrice = numericPrice / 100;

      return numericPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }

    return "Preço indisponível";
  };

  return (
    <Container>
      <CardImage
        src={product.url}
        alt={product.name}
        onClick={handleImageClick}
      />
      <div>
        <p>{product.name}</p>
        <strong>{getFormattedPrice()}</strong>
      </div>
      <CardButton onClick={() => putProductInCart(product)} />
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    CurrencyValue: PropTypes.string,
  }),
};
