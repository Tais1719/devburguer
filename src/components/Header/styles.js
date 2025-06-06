// src/components/styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

// Container do Header
export const Container = styled.div`
  background-color: ${(props) => props.theme.darkWhite};
  width: 100%;
  height: 72px;
  padding: 0 56px;
  gap: 90px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
  }

  hr {
    height: 24px;
    border: 1px solid red;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? props.theme.   emerald : props.theme.  deepForest};
  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${(props) => props.theme. mainBlack}` : 'none'};
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme. emerald};
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 55px; /* Aumentando o gap entre os elementos do cabeçalho */
`;


export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;

  p {
    color: black;
    line-height: 90%;
    font-weight: 300;
  }

  span {
    font-weight: 700;
    color:#1e3a8a;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoutButton = styled.button`
  color:black;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 4px 8px;

  input {
    border: none;
    outline: none;
    font-size: 14px;
    padding: 4px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color:  lightBlue;
    }
  }
`;
