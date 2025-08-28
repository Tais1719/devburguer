import styled from "styled-components";

export const Container = styled.div`
  background:  #ecf3e9ff ;
  border-radius: 24px;
  margin-left: 30px;
padding: 20px;
height:40vh;
 width: 80vh;
  max-width: 1400px; // largura máxima para não estourar em telas grandes
  display: grid;



  .title {
    border-radius: 16px;
   
    color: #464746ff;
    font-size: 20px;
 
    text-align: center;
    padding: 15px;
 
    position: relative;

   
  }

  .items, .delivery-tax, .total-label {
    padding: 5px;

   color: #292929ff;
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .items-price, .delivery-tax-price, .total-price {
   color: #fd8585ff;
    display: flex;

    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
  
  }

  .total-label, .total-price {

    grid-column: 1 / -1;
    border-top: 2px solid #ccc;
    padding-top: 15px;
    font-size: 18px;
   
  }
  .delivery-container {
  display: flex;
  align-items: center;
  gap: 39vh; /* ajusta a distância entre o texto e o valor */
  font-size: 16px;
}
.items-count {
  color:#fd8585ff; /* deixa o número em vermelho */
  font-weight: 700; /* opcional: deixa o número mais destacado */
}

.delivery-tax {
  color: #494848ff;
}

.delivery-tax-price {
  color: #fd8585ff;
  font-weight: 700;
}


  .container-button {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    padding-top: 20px;

    button {
      background: linear-gradient(135deg, #1b291cff 0%, #a8f5a8ff 100%);
      color: #fff;
      font-size: 14px;
      font-weight: 800;
      border: none;
      border-radius: 16px;
      cursor: pointer;
      height: 45px;
      min-width: 200px;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
      }

      &:hover {
        background: linear-gradient(135deg, #8eb897ff 0%, #7cc575ff 100%);
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(137, 228, 115, 0.4);

        &::before {
          left: 100%;
        }
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(30, 144, 255, 0.3);
      }
    }
  }
`;

export const EmptyCartContainer = styled.div`

  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
  border-radius: 24px;
  margin-left: 60vh;
 margin-top: 20vh;
  width: calc(100% - 60px);
  max-width: 1000px;
  padding: 50px 30px;
  box-shadow: 0 8px 32px rgba(231, 145, 145, 0.15);
  text-align: center;
  border-radius:10px;
  transition: all 0.3s ease;

  .empty-icon {
    font-size: 64px;
    margin-bottom: 20px;
    opacity: 0.7;
  }

  .empty-title {
    font-size: 28px;
    font-weight: 800;
    color: #dc2626;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .empty-message {
    font-size: 18px;
    color: #3f2323ff;
    font-weight: 500;
    line-height: 1.6;
  }
`