import styled from "styled-components";
import Background from '../../assets/logo1.png'

import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`

display: flex;
height: 100vh;
right: 100vw;

`

export const LeftContainer = styled.div`
background: url('${Background}');
background-size:cover ;
background-position:center; 
height: 100%;
width:100%;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 80%;

}

`

export const RightContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

height: 100%;
width:100%;
max-width: 50%;

background-color: #e8fff2ff;


 

p{
  
color: #033a0cff;
font-size: 18px;
font-weight: 800;
font-family:'Poppins", sans-serif',
   

}

a{
  text-decoration: underline;
  color:rgba(243, 0, 0, 1) ;
  
  
  }



`

export const Title = styled.h2`

font-family:  'Poppins", sans-serif';
  font-size: 35px;
  color: #02521aff;
  


`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;

`

export const InputContainer = styled.div`

display: flex;
flex-direction: column;
gap: 5px;
width: 100%;


input{
   
    width: 100%;
border: none;
height: 52px;
border-radius: 5px;
padding: 0 16px;

}
 
 label{
  font-family:'Poppins", sans-serif';
    font-size: 18px;
   color: #083b03ff;
    font-weight: 600;

}
p{
  font-size: 14px;
 color:#cf3057;
line-height: 80%;
font-family: 600;
height:10px;



}


`

export const Link  = styled (ReactLink)`

text-decoration: none;
color: white;

`