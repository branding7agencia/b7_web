import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`

export const StylesCarrossel = styled.div`
display: flex;
animation: ${scrollAnimation} 20s linear infinite;

&:hover{
    animation-play-state: paused;
}

    img{
        width: 310px;
        flex-shrink: 0;
        margin:  0 40px;
    }

    @media (min-width: 768px) {
        img{
        width: 140px;
        margin: 0 40px;
    }
    }
`

export const CarroselConatiner = styled.div`
    width: 100%;
    overflow: hidden;
`