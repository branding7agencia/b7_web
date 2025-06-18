import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const StyleCardService = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 312px;
    background-color: ${theme.colors.fundo2};
    border-radius: 16px;
    padding: 24px;

    /*Estilos para a div images (primeira div)*/
    .images{
        display: flex;
        justify-content: space-between;

        /*Estilos para aimagem do serviço*/
        .service {
            width: 120px;
        }
        /*Estilos para o link*/
        .link{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
            border: solid 2px ${theme.colors.fundo};
            border-radius: 50%;
            width: 48px;
            height: 48px;
            text-decoration: none;
            .ui-link{
                width: 24px;
            }
        }
        
    }

    /*Estilos para a caixa de texto*/
    .text{
        display: flex;
        flex-direction: column;
        gap: 16px;
        /*Estilos do título do card*/
        h3{
            font-size: 24px;
        }
        /*Estilos do parágrafo do card*/
        p{
            font-size: 14px;
            line-height: 1.5;
        }
    
    }

    @media (min-width: 768px) {
        width: 248px;
    }
`