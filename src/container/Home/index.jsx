
import { OffersCarousel, CategoriesCarousel,  } from "../../components"
import { Banner, Container,Text, } from "./styles";

export function Home() {

    return (
        <main>
       
            <Banner>
                <h1>Bem vindo</h1>
                <Text>Comprar Ropa Básica Hombre</Text>
                
            </Banner>


            <Container>
              
                    <CategoriesCarousel />
                    <OffersCarousel />
              

                
            </Container>
        </main>
    )
}


