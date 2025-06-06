
import { OffersCarousel, CategoriesCarousel,  } from "../../components"
import { Banner, Container,Text } from "./styles";

export function Home() {

    return (
        <main>
      
            <Banner>
                <h1>EcoModa</h1>
                <Text>Comprar Ropa Básica Hombre</Text>
                <h3>Hace más de 60 años nos dedicamos a la producción de ropa básica de hombre, desde el inicio la calidad fue nuestro eje. Por eso, nos convertimos en referentes de la industria.

Hoy ofrecemos productos básicos de ropa de la mejor calidad para uso interior y exterior, imponiendo el estilo clásico al look de los hombres y mujeres con actitud.

¡Encontra la indumentaria básica para hombres en esta sección!</h3>
             
            </Banner>


            <Container>
                <div>
                    <CategoriesCarousel />

                    <OffersCarousel />
                </div>
            </Container>
        </main>
    )
}


