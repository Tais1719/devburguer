import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: aliceblue;
  width: 100%;
  max-width: 400px;

  p {
    font-size: 18px;
    color: rgb(26, 138, 14);
    line-height: 20px;
    margin-bottom: 9px;
  }

  strong {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: rgb(62, 62, 63);
    font-weight: 900;
    line-height: 20px;
  }

  @media (max-width: 430px) {
    padding: 16px;

    p {
      font-size: 16px;
    }

    strong {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 430px) {
    flex-direction: row; /* Mantém lado a lado no mobile */
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardImage = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 430px) {
    height: 80px;
    width: 80px;
  }
`;

export const CardButton = styled.button`
  margin: 0 auto;
  display: block;
  padding: 10px 20px;
  background-color: #ff8c05;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e07b04;
  }

  @media (max-width: 430px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
