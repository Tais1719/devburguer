
import styled from "styled-components";

import Texture from '../../assets/texture.svg'

import Background from '../../assets/background-login.svg'

export const Container = styled.div`
width: 100%;
  background: 
    linear-gradient(
      rgba(224, 205, 205, 0.5),
      rgba(201, 197, 197, 0.5)
    ),
    url('${Background}');
min-height: 100vh;
;
`;

export const Banner = styled.div`
background:url('${Texture}') ;
background-size:cover;
background-color: rgb(226, 218, 218);
background-position: center;
display: flex;
align-items: center;
justify-content: center;
position: relative;
height:180px ;

img{
    height: 120px;
    margin-top: 90px;
}
`;

export const Title = styled.div`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
margin-top: 50px;
color: rgb(69, 150, 11) ;
text-align: center;
position: relative;

&::after{
  content: '';
   position: absolute;
   left: calc(50% + -28px);
   bottom: 0;
   left: 50%;
   width: 56px;
   height: 4px;
   background-color:rgb(69, 150, 11);
   transform: translateX(-50%);
}
`;

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 25%;
gap: 40px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;
`;

