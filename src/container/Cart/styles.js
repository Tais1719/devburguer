// styles.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;


`;   

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 20px;
  margin-top: 130px;
  color: rgba(22, 21, 21, 1);
margin-left:190px;
  

  
`;

export const Content = styled.div`

  display: grid;
  grid-template-columns: 1fr 55%; /* lado esquerdo e direito */
  gap: 10px;
  width: 0%;
  max-width: 100px;
  margin-left: 60px;

`;

