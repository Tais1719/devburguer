
import styled from "styled-components";

import Texture from '../../assets/Texture.svg'

import Background from '../../assets/background-login.svg'

export const Container = styled.div`
width: 100%;
  background: 
    linear-gradient(
      rgba(180, 178, 178, 0.5),
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
}
`;

export const Title = styled.h1`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: rgb(69, 150, 11) ;
text-align: center;
position: relative;

&::after{
   position: absolute;
   left: calc(50% + -28px);
   bottom: 0;
   content: '';
   width: 56px;
   height: 4px;
   background-color:rgb(69, 150, 11);
}
`;

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 20%;
gap: 40px;
width: 100%;
max-width: 1280%;
pad: 40px;
margin: 0 auto;
`;
