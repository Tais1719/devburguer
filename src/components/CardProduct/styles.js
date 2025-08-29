import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 10px;
    border-radius: 8px;
       background: #f9f6ffff; /* secondDarkPurple */
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
div {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;  // centraliza verticalmente  
    gap: 3px;

    p {
        font-size: 15px;
        color: ${(props) => props.theme.black};
        line-height: 20px;
        margin-top: 120px;
        text-align: center; // centraliza o texto horizontalmente
    }

    strong {
        font-size: 16px;
        color: ${(props) => props.theme.red};
        font-weight: 600;
        line-height: 30px;
        text-align: center; // centraliza o texto horizontalmente
    }
}

`

export const CardImage = styled.img`
    height: 115px;
    position: absolute;
    top: -50px;
`