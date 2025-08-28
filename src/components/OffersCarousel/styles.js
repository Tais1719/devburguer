import styled from "styled-components";


export const Container = styled.div`
  width: 100vw; /* Ocupa toda a largura da viewport */
.carousel-item{

    padding-right: 40px;
    

} 

overflow-x: hidden;


  .react-multi-carousel-list{
overflow: visible;



}


.react-multiple-carousel__arrow--left {
    left: 10px;
  top: 10px;

}

.react-multiple-carousel__arrow--right {
right: 130px;
  top:10px;

}


padding-left: 40px;
padding-bottom:40px;



`
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  margin: 60px 0;
  position: relative;
  padding-bottom: 12px;
  color: #7e40b8ff; /* purple */

  /* Glow simples */
  text-shadow: 0 0 8px #9758a6AA;

  /* Movimento suave do título */
  animation: titleMove 3s ease-in-out infinite alternate;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60px;
    height: 4px;
    border-radius: 5px;
    background: #600375ff; /* secondDarkPurple */
    transform: translateX(-50%);
    box-shadow: 0 0 8px #c663dfff; /* darkPurple */
    animation: lineMove 2s ease-in-out infinite alternate;
  }

  @keyframes titleMove {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.05); }
    100% { transform: translateY(0) scale(1); }
  }

  @keyframes lineMove {
    0% { transform: translateX(-50%) scaleX(1); }
    50% { transform: translateX(-50%) scaleX(1.3); }
    100% { transform: translateX(-50%) scaleX(1); }
  }
`;
