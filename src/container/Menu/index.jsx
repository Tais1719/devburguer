import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CaretLeft } from '@phosphor-icons/react'; // ícone de voltar

import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton, BackButton } from "./styles";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const { search } = useLocation();

  // Pega categoria da URL
  const queryParams = new URLSearchParams(search);
  const categoryFromUrl = +queryParams.get("categoria") || 0;

  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);

  // Carrega categorias e produtos
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories([{ id: 0, name: "Todas" }, ...data]);
    }

    async function loadProducts() {
      const { data } = await api.get("/products");
      const newProducts = data.map((product) => ({
        ...product,
        currencyValue: FormatPrice(product.price),
      }));
      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  // Filtra produtos ao mudar categoria ou produtos
  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category_id === activeCategory)
      );
    }
  }, [products, activeCategory]);

  // Atualiza categoria ativa quando a URL muda
  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br />
          HAMBÚRGUER <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        

        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate({
                pathname: "/cardapio",
                search: `?categoria=${category.id}`,
              });
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
