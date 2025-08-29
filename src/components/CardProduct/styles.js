import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 8px;
       background: #f3f2f5ff; /* secondDarkPurple */
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;  // centraliza verticalmente
    gap: 5px;

    p {
        font-size: 15px;
        color: ${(props) => props.theme.black};
        line-height: 20px;
        margin-top:80px;  
        text-align: center; // centraliza o texto horizontalmente
    }

    strong {
        font-size: 19px;
        color: ${(props) => props.theme.red};
        font-weight: 600;
        line-height: 30px;
        text-align: center; // centraliza o texto horizontalmente
    }
}

`

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`