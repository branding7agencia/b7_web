import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesMotivos = styled.div`
    display: flex;
    text-align: center;

    .left{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        .text{
            display: flex;
            flex-direction: column;
            gap: 16px;

            span{
                color: ${theme.colors.roxo2};
            }
            p{
                font-size: 14px;
            }
        }

        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;

            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                img{
                    margin-right: 8px;
                }
            }
        }
    }
`