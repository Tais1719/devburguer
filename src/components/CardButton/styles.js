import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: #4c5e4fff;
  width: 90%;
  height: 42px;
  margin-top: 12px;         /* espaço mais natural abaixo do conteúdo */
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #68c083ff;
  }
`;
