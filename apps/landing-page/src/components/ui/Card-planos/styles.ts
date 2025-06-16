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
    display: flex;
    flex-direction: column;
    gap: 32px;

    p{
        font-size: 14px;
    }

    .head{
        display: flex;
        flex-direction: column;
        gap: 24px;
        h3{
            font-size: 28px;
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
`