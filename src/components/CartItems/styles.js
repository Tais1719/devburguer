// Product styles
import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 70px;      // menor
  height: 80px;     // menor
  object-fit: cover;
  border-radius: 4px;
  display: block;
`;

export const ProductTotalPrice = styled.span`
  font-weight: 600;  
  font-size: 11px;  // menor
  border-radius: 4px;
  display: inline-block;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;        // menos padding
  border-radius: 4px;

  button {
    width: 20px;        // menor
    height: 20px;       // menor
    padding: 4px;       // menor
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;    // menor
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #b4e7b4ff;
    }
    &:active {
      transform: scale(0.95);
    }
  }

  span {
    background-color: #8b8589;
    margin: 4px;        // menor espaçamento
    color: #fff;
    min-width: 25px;    // menor
    height: 20px;       // menor
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 11px;    // menor
    border-radius: 4px;
  }
`;

export const TrashImage = styled.img`
  width: 14px;         // menor
  height: 14px;        // menor
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
