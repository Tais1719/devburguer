import styled, { createGlobalStyle } from "styled-components";
import BannerHome from '../../assets/logo3.jpg';
import Background from '../../assets/logo3.jpg';

// Reset global corrigido (altura deve ser 100%)
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif;
  }
`;

export const Banner = styled.div`
  position: relative;
  background: url('${BannerHome}') no-repeat center center;
  background-size: cover;
  height: 600px;
  padding: 3rem 2rem;
  color: #fff;  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    margin-top: 50px;
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    color:#1b4332;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    max-width: 600px;
    color:rgb(98, 98, 98);
    background: rgba(255, 251, 251, 0.8);
    padding: 1rem;
    border-radius: 8px;
    line-height: 1.5;
    margin-top: 1rem;
  }
`;

export const Text = styled.p`
  color: #111;
  font-size: 1.5rem;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.85);
  height: 50px;
  width: 30%;
  padding: 0.5rem 1rem;
  border-radius: 6px;

`;

export const Container = styled.section`
  background: rgba(234, 234, 227, 0.85);

  background-position: center;
  height: auto;
  padding: 2rem;

  > div {
    max-width: 1600px;
   
  }
`;
