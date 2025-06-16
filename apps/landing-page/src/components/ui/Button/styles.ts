import styled from "styled-components";
import { theme } from "../../../styles/theme";

import { StylesProps } from "../../../types/styled.types";

export const StylesButton = styled.button<StylesProps>`
    width: 272px;
    padding: 16px;
    border-radius: 32px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    /*Condicionais para mudar a cor do botão*/
    background-color: ${(props) => props.isActive ?
        theme.colors.roxo : theme.colors.branco};
    color: ${(props) => props.isActive ? 
        theme.colors.branco : theme.colors.roxo};
    /*Pseudo seletor para deixar o botão dinâmico*/
    &:hover{
        background-color: ${(props) => props.isActive ?
            theme.colors.branco : theme.colors.roxo2};
        color: ${(props) => props.isActive ? 
            theme.colors.roxo2 : theme.colors.branco};
    }
`