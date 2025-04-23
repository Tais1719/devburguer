import { useEffect, useState } from "react";
import { Banner, Container, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import {  useLocation, useNavigate } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'


export function Menu () { 


  const [categories, setCategories] = useState([]);
  
  const [products, setProducts] = useState([]);
  
  const [filteredProducts, setfilteredProducts] = useState([]);

   
   const navigate = useNavigate();

   const{search}= useLocation()

   const queryParams = new URLSearchParams(search)
   
         
  const [activeCategory,  setActiveCategory]  = useState(()=>{ 
const categoryId = +queryParams.get('categorias')
     
if(categoryId){ 
    return categoryId;
}
return 0;

   })



   

    useEffect(()=>{
      async function loadCategories() {

            const {data }  = await api.get('/categories')
         const newCategories = [{ id: 0, name: 'Todas' }, ...data];


           setCategories(newCategories)

         }

         async function loadProducts() { 
                     const {data }  = await api.get('/products')

               
         
                    const newProducts = data.map((product) =>({
                         CurrencyValue: FormatPrice(product.price),
                     ...product,
                    }))
                 
         
                    setProducts(newProducts)
                
         
         
                  }
                  loadCategories()
                 loadProducts()
        
     }, [])
     useEffect(() =>{
        if (activeCategory === 0){
            setfilteredProducts(products); 
         }else{ 
            const newFilteredProducts = products.filter(
                (product) =>product.category_id === activeCategory,
            )
            setfilteredProducts(newFilteredProducts)
         }

     },[products, activeCategory])


    
    return(
        <main>
            <Container>

            <Banner>
            <h1>O MELHOR
                <br/>
                HAMBURGUER
                <br/>
                ESTA AQUI 
              
            <span>este cardapio esta irresistível</span>
            </h1>
            </Banner>
            <CategoryMenu>
            {categories.map((category)=>(
             <CategoryButton 
             key={category.id}
             $isActiveCategory ={category.id === activeCategory}
             onClick={()=>{
                navigate(
                    {
                        pathname:'/cardapio',
                        search:`?categoria=${category.id}`
                    },
                    {
                        replace:true,
                    },
                   
                )
                setActiveCategory(category.id)
             }}


             > {category.name}

              </CategoryButton>
            ))}
            </CategoryMenu>
            
                <ProductsContainer>
                { filteredProducts.map(product  =>(
                    <CardProduct product={product} key={product.id}/>
                )) }
                </ProductsContainer>
            </Container>
        </main>
    )
} 