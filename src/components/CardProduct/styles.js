import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 20px;
border-radius: 8px;
background-color: aliceblue;
cursor:grab;
position: relative;
div{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   right: 90px;
   gap: 5px;
    

    p{
        font-size: 18px;
        color: #FF8C05;
       line-height: 20px;
       font-weight: 700;
       margin-top: 45px;

 
 }
 strong{
    font-size: 22px;
    color: #363636;
    font-weight: 800;
    line-height: 20px;


}


 }

`
export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -34px;
`;
