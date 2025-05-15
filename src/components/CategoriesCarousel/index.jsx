import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { api }  from '../../services/api'
import { useNavigate } from 'react-router-dom';
import { Container, Title, ContainerItems, CategoryButton } from './styles';



export function CategoriesCarousel() { 
   
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()


    useEffect(()=>{
      async function loadCategories() {

            const {data }  = await api.get('/categories')

         
           setCategories(data)


         }
        loadCategories()
     }, [])

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};


    return(
        <Container>
           <Title>Categorias </Title> 
         
          <Carousel
    responsive={responsive}
    infinite={true}
    partialVisible={false}
    itemClass="carousel-item"
  >
    {categories.map((category) => (
      <ContainerItems key={category.id} imageUrl={category.url}>
        <CategoryButton
         onClick={()=>{
        
          navigate({
            pathname:'/cardapio',
            search:`?categorias=${category.id}`,

          }

          )
        
         } }
        
        >
          
          {category.name}
          </CategoryButton>
      </ContainerItems>
    ))}
 
 
      </Carousel>
        </Container>
    )
 }