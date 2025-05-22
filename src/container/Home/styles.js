
 import styled from "styled-components";


import BannerHome from '../../assets/logo3.jpg'

import Background from '../../assets/logo3.jpg'



 export const Banner=styled.div`
 background: url('${BannerHome}');
 background-size: cover;
 background-position: center;
 height:600px;


 h1{ 
    
   font-family: "Road Rage", sans-serif;
    font-size: 80px;
    color:rgb(27, 16, 238);
    position: absolute;
    right: 20%;
    top: 10%;
  }

 

`

export const Container = styled.section`

  background: 
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(201, 197, 197, 0.5)
    ),
    url('${Background}');
    height: 800px;


`