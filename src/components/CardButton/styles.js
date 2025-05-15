import styled from "styled-components";



export const ContainerButton = styled.button`
background-color:  ${(props) =>props.theme.purple} ;
width: 50;
height: 52px;
margin-top: 20px;
border: 0;
border-radius: 5px;
font-size: 30px;
color: #ffffff;

&:hover{
    background-color:  ${(props) =>props.theme.purple};
 }

`