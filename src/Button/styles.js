import styled from "styled-components";

// Estilo do botão
export const ContainerButton = styled.button`
width: 100%;
height: 52px;
  border-radius: 5px;
  border: 0;
  background-color:  ${(props) =>props.theme.purple};
  cursor: pointer;
  font-size: 30px;
  color:#fff;
  
font-family: "Road Rage", serif;

&:hover {
background-color: #6f357c;
border: 1 px dashed #fff;
  
}

`;
