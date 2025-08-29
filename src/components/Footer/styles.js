// styles.js
import styled from "styled-components";

export const Container = styled.div`
  min-height: 60px; /* Aumentei a altura mínima */
  background-color: rgb(96, 96, 97);   
  width: 100%; /* Mudei de 100vw para 100% */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px; /* Adicionei padding para melhor espaçamento */
  margin-top: auto; /* Isso empurra o footer para baixo */
  
  /* Ou se quiser fixar na parte inferior da tela: */
  /* position: fixed;
     bottom: 0;
     left: 0; */

  p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 300; /* Mudei de 'lighter' para valor numérico */
    margin: 0; /* Remove margin padrão do <p> */
    text-align: center;
  }
`;