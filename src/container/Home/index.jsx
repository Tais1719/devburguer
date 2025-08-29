
import { OffersCarousel, CategoriesCarousel,  } from "../../components"
import { Banner, Container, } from "./styles";

export function Home() {

    return (
        <main>
       
            <Banner>
                <h1>bem-vindo(a)</h1>
              
                
            </Banner>


            <Container>
              
                    <CategoriesCarousel />
                    <OffersCarousel />
              

                
            </Container>
        </main>
    )
}


