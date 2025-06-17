import styled from "styled-components";
import { theme } from "../../../styles/theme";

import type { StylesProps } from "../../../types/styled.types";

export const StyleCardPlans = styled.div<StylesProps>`
    width: 352px;
    border: 1px solid ${theme.colors.roxo2};
    border-radius: 16px;
    padding: 24px;
    border: 1x solid ${theme.colors.roxo2};
    background-color: ${(props) => props.isActive 
        ? theme.colors.fundo 
        : theme.colors.fundo2}; 
        background-color: ${theme.colors.fundo};
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-family: ${theme.fonts.paragrafos};

    .head{
        display: flex;
        flex-direction: column;
        gap: 24px;
        font-family: ${theme.fonts.main};
        h3{
            font-size: 28px;
            font-weight: 700;
        }
        .price{
            display: flex;
            gap: 8px;
            b{
                font-size: 28px;
            }
            p{
                color: ${theme.colors.roxo};
            }
        }
    }

    p{
        font-size: 14px;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style: none;
        li{
            display: flex;
            gap: 8px;
            font-size: 16px;
            img{
                width: 18px;
            }
        }
    }

    span{
        color: ${theme.colors.rosa};
    }
`