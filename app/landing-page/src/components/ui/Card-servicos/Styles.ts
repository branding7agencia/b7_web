import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyleCardServicos = styled.div`
    background-color: ${theme.colors.fundo2};
    padding: 24px;


    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 48px;
        width: 320px;
        height: 376px;
        border-radius: 16px;

        /*Estilos para a div de classe .ui*/
        .ui{
            display: flex;
            justify-content: space-between;
            /*estilos para a imagem do card*/
            .img-product{
                color: ${theme.colors.branco};
                width: 120px
            }
            /*Estilos para a div de classe .link*/
            .link{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid ${theme.colors.fundo};
                border-radius: 50%;
                width: 48px;
                height: 48px;
                /*EStilos para imagem dentro do link*/
                img{
                    width: 24px;
                }
            }
        }
        /*Estilos para a div de classe .text*/
        .text{
            display: flex;
            flex-direction: column;
            gap: 16px;
            h3{
                font-size: 28px;
                font-weight: bold;
            }
            p{
                font-size: 14px;
                line-height: 1.6;
            }
        }
    }
`;
