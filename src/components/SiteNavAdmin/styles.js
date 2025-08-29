import styled from "styled-components";
import { Link } from 'react-router-dom';




export const Container = styled.nav`
display: flex;
flex-direction: column;
width:100% ;
height: 100vh;   
  background-color: #181717ff;; /* hover cinza */
align-items: center;


img {  
    width: 60%;
    margin: 40px 0;  
     width: 60%;
    margin: 40px 0;
    border-radius: 50%; /* <- aqui deixa o logo redondo */
    object-fit: cover; /* <- garante que a imagem não distorça */
} 

`;


export const NavLinkContainer = styled.nav`
display: flex;
flex-direction: column;
width: 100%;


`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 19px;
  padding: 19px 20px;
  margin-top: 5px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => (props.$isActive ? props.theme.darkBlue : 'transparent')};
  transition: background-color 0.3s ease; /* transição suave */

  &:hover {
    background-color: #5f8b71; /* hover verde */
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  ${NavLink} {
    &:hover {
      background-color: #5f8b71; /* mesmo verde do hover principal */
    }
  }
`;
