import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface ThemeProps {
    hasButton?: boolean
}

export const StyleButton = styled.button<ThemeProps>`
    border-radius: 32px;
    font-weight: bold;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
    padding: 16px;
    width: 240px;
    font-size: 16px;

    /*props para alterar o tema do botão*/
    ${props => 
        props.hasButton 
        ? css`
            background-color: ${theme.colors.roxo};
            color: ${theme.colors.branco};
        `
        : css`
            background-color: ${theme.colors.branco};
            color: ${theme.colors.roxo};
        `
}

    /*pseudo seletor para o elemento reagir aomovimento do mouse*/
    &:hover{
        ${props => 
        props.hasButton 
        ? css`
            background-color: ${theme.colors.branco};
            color: ${theme.colors.roxo};
        `
        : css`
            background-color: ${theme.colors.roxo};
            color: ${theme.colors.branco};
        `
    }
    }

@media (min-width: 768px) {
    width: 272px;
}
`
