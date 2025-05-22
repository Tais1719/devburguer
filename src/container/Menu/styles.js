import styled from "styled-components";
import BannerHamburger from '../../assets/loja4.jpg'


import Background from '../../assets/background.jpg'
import { Link } from "react-router-dom";



export const Container = styled.div`

width: 100%;
min-height: 100vh;
background-color:rgb(95, 231, 10);
 background: linear-gradient(
      rgba(174, 219, 191, 0.5),
      rgba(113, 120, 115, 0.5)
    ),
    url('${Background}');
   
  background-repeat: no-repeat;






h1{
font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 70px;
    line-height: 67px;
    color:rgb(246, 246, 246);
    position: absolute;
   left:10%;
    top: 30%;

}
span{
display: block;

color:rgb(255, 254, 254);
font-size: 40px;

}
`

export const Banner = styled.div`

display: flex;
justify-content: center;
height: 400px;
position: relative;
background: url('${BannerHamburger}')no-repeat;
background-color: #1f1f1f;
background-position: center;
background-size: cover;




`






export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
 
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Desktop */
  padding: 20px;
  gap: 50px;
  justify-content: center;
  max-width: 1200px;
  margin: 50px auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Celulares maiores */
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr; /* Celular pequeno: 1 por linha */
    gap: 30px;
    padding: 10px;
  }
`;




export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory ? (props).theme.purple : '#696969'};
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory && `3px solid`};
`;
